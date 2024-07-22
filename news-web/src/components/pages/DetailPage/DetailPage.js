import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

// files & pages
import '../../sass/detailPage.scss';
import Header from "../Header/Header";
import { fetchRssFeed, getRssFeedDetail } from '../../utils/RssFeed';
import Navigation from '../../layout/Navigation/Navigation';
import TextToSpeech from '../../utils/TextToSpeech';
import Article from '../../layout/Article/Article';
import Footer from '../Footer/Footer';
// import TextToSpeechWrapper from "../util/TextToSpeechWrapper";


const DetailPage = () => {

    // lấy đường dẫn lại
    const { cate, slug } = useParams();
    const link = `https://baotintuc.vn/${cate}/${slug}`
    console.log(link);
    const fullUrl = `http://localhost:5000/proxy?url=${encodeURIComponent(link)}`;
    console.log(fullUrl);
    const [dataArticle, setDataArticle] = useState([]);
    const [content, setContent] = useState({
        title: '',
        sapo: '',
        body: '',
        bodys: '',
        tag: '',
        // more:'',
        // mgbox:'',
    });
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comment')));
    const submitComment = (event) => {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        const name = event.target.elements.name.value;
        const newComment = {id: link, name: name, comment: comment};
        const cmt = [newComment, ...comments]; // Thêm bình luận mới vào danh sách
        localStorage.setItem("comment", (JSON.stringify(cmt)));
        event.target.elements.comment.value = ''; // Xóa nội dung của input
        event.target.elements.name.value = ''; // Xóa tên của input
    }
    useEffect(() => {
        const newComments = JSON.parse(localStorage.getItem("comment"))
        if (newComments) {
            setComments(newComments);
        }
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArticle = await fetchRssFeed('https://baotintuc.vn/tin-moi-nhat.rss');
                setDataArticle(dataArticle);

            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);
    const firstSection = dataArticle.slice(0, 3);
    useEffect(() => {

            getRssFeedDetail(fullUrl, (result) => {
                console.log('da vao trang chi tiet');
                console.log(result.title); // In ra tiêu đề
                console.log(result.sapo); // In ra mô tả
                console.log(result.body); // In ra nội dung
                console.log(result.tag);//In ra nhãn bài báo
                console.log(content);
                const text = result;
                setContent({
                    ...content,
                    title: text.title,
                    sapo: text.sapo,
                    body: text.body,
                    bodys: text.bodys,
                    tag: text.tag,
                });

                return result;
            });

        },
        []);

    const filteredComments = comments.filter(comment => comment.id === link);

    return (
        <div>
            <Header/>
            <div id='detailPage'>
                <TextToSpeech text={content.bodys } id='textvoice'/>
                <div className={"content-main"}>
                    <div className={'content-right'}>
                        <div className={'article__title cms-title'}>{content.title}</div>
                        <div className={'article__sapo cms-desc'}>{content.sapo}</div>
                        <div className={'article__body cms-body'} dangerouslySetInnerHTML={{ __html: content.body }}></div>
                        <div className={'article__tag'} dangerouslySetInnerHTML={{ __html: content.tag }}></div>
                    </div>
                    <div className={'content-left'}>
                        <div className={'sideBar'}>
                            {firstSection.map((item, index) => (
                                <div key={index}>
                                    <Article feed={item}></Article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={'title-comment'}> Bình Luận</div>
                <div className={'comment'}>
                    {/*Hiển thị danh sách bình luận*/}
                    {filteredComments.map((comment, index) => (
                        <div className='comment-block'>
                            <div key={`${comment.id}-${index}`} className='comment_blk-text'>
                                <p className='name-text'>{comment.name}</p>
                                <p className='comments-text'>{comment.comment}</p>
                            </div>
                        </div>
                    ))}

                    {/* Form nhập bình luận */}
                    <form onSubmit={submitComment}>
                        <div className='input-name-blk'>
                            <label className={"name"} htmlFor="name">Tên của bạn:</label>
                            <input className={"text-name"} type="text" id="name-input" name="name"/><br/>
                        </div>

                        <div>
                            <label className={"comments"} htmlFor="comment">Bình luận:</label>
                            <textarea className={"text"} id="comment" name="comment"></textarea><br/>
                        </div>

                        <button className="button" type="submit">Gửi bình luận</button>
                    </form>
                </div>


                {/*<div className={"mgbox"} dangerouslySetInnerHTML={{__html: content.mgbox}}></div>*/}

            </div>
            <Footer/>
        </div>

    );
};
export default DetailPage;
