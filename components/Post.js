/* eslint-disable react-hooks/exhaustive-deps */

import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { ThumbUpIcon as ThumbUpIconFilled } from "@heroicons/react/solid"

import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import Image from "next/future/image";

function Post({ id, username, userImg, img, caption }) {

    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    //추천(엄지척)
    const [ThumsUp, setThumsUp] = useState([]);
    const [hasThumsUp, setHasThumsUp] = useState(false);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                snapshot => setComments(snapshot.docs)
            ),
        
        [db]
    );

    console.log(hasLiked);


    //Likes
    useEffect(
        () =>
            onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
                setLikes(snapshot.docs)
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db, id]
    );

    useEffect(
        () =>
            setHasLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );


    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        }
        else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            });
        }
    };


    //좋아요, 엄지척
    useEffect(
        () =>
            onSnapshot(collection(db, 'posts', id, 'ThumsUp'), (snapshot) =>
                setThumsUp(snapshot.docs)
            ),
        [db, id]
    );

    useEffect(
        () =>
            setHasThumsUp(
                ThumsUp.findIndex((ThumUp) => ThumUp.id === session?.user?.uid) !== -1
            ),
        [ThumsUp]
    );


    const ThumsUpPost = async () => {
        if (hasThumsUp) {
            await deleteDoc(doc(db, 'posts', id, 'ThumsUp', session.user.uid))
        }
        else {
            await setDoc(doc(db, 'posts', id, 'ThumsUp', session.user.uid), {
                username: session.user.username
            });
        }
    };


    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };

    return (
        <div className="bg-white my-7 border rounded-sm">

            {/* {Header} */}
            <div className="flex items-center p-5 ">
                <Image
                    src={userImg}
                    className=" rounded-full h-12 w-12 object-contain border p-1 mr-3"
                    alt=""
                    width={42}
                    height={42}
                />
                <p className="ml-5 flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
            <Image src={img} className="object-cover w-full" alt=""
                width={800}
                height={800} />

            {/* btns */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasLiked ? (
                                <HeartIconFilled onClick={likePost} className="btn text-red-500" />
                            ) : (
                                <HeartIcon onClick={likePost} className="btn" />
                            )}

                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />

                    </div>

                    {
                        hasThumsUp ? (
                            <ThumbUpIconFilled onClick={ThumsUpPost} className="btn text-blue-500" />
                        ) : (
                            <ThumbUpIcon onClick={ThumsUpPost} className="btn" />
                        )}
                </div>
            )}


            {/* caption */}
            <p className="p-5">
                {likes.length > 0 && (
                    <p className="font-bold mb-2 text-red-500 ">{likes.length} likes </p>
                )}
                {/* <span className="font-bold mr-1">
                    {username} 
                    </span> */}
                {caption}
            </p>


            {/* comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(comment => (
                        <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                            <Image
                                className="rounded-full"
                                src={comment.data().userImage}
                                alt=""
                                width={30}
                                height={30}
                            />
                            <p className="text-sm flex-1">
                                <span className="font-bold">
                                    {comment.data().username}
                                </span>{" "}
                                {comment.data().comment}
                            </p>
                            <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7 mr-3" />
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="bg-blue-50 border-none flex-1 focus:ring-0 online-none rounded"
                    />
                    <button
                        type='submit'
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        className="font-semibold text-blue-400 ml-4">Post</button>
                </form>
            )}

        </div>
    );
}

export default Post;