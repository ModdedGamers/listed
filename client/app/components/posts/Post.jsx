import React from "react";
import moment from "moment";
import SVG from "react-inlinesvg";
import { IcArrowLong } from "../../assets/icons";
import "./Post.scss";

const Post = ({ truncate, post }) => {
    // HTML has already been sanitized on Rails side
    const previewText = { __html: post.preview_text };
    const renderedText = { __html: post.rendered_text };

    const getTruncatePostContent = () => (
        <div>
            <div className="post-header">
                <h5 className="post-title h5">{post.title}</h5>
                {post.page || (
                    <p className="post-date p3">
                        {`${moment.utc(post.created_at).format("MMMM D, YYYY")} · ${post.word_count} words`}
                    </p>
                )}
            </div>
            <div className="post-body p2">
                <div className="post-preview-body" dangerouslySetInnerHTML={previewText}></div>
            </div>
            <a className="block read-more-link" href={post.author_relative_url}>
                Read post
                <SVG src={IcArrowLong} className="read-more-link__icon" />
            </a>
        </div>
    );

    return (
        <div className={`post-content ${truncate == true ? "post-preview" : ""}`}>
            {truncate ? (
                post.unlisted ? (
                    getTruncatePostContent()
                ) : (
                    <a className="post-title" href={post.author_relative_url}>
                        {getTruncatePostContent()}
                    </a>
                )
            ) : (
                <>
                    <div className="post-header">
                        {post.unlisted ? (
                            <h2 className="post-title h2">{post.title}</h2>
                        ) : (
                            !post.page && (
                                <h2 className="post-title h2">
                                    <a className="post-title" href={post.author_relative_url}>
                                        {post.title}
                                    </a>
                                </h2>
                            )
                        )}
                        {post.page || (
                            <p className="post-date p3">
                                {`${moment.utc(post.created_at).format("MMMM D, YYYY")} · ${post.word_count} words`}
                            </p>
                        )}
                    </div>
                    <div className="post-body p1" dangerouslySetInnerHTML={renderedText}></div>
                    {post.page || (
                        <p className="post-date p3">
                            {`${moment.utc(post.created_at).format("MMMM D, YYYY")} · ${post.word_count} words`}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default Post;
