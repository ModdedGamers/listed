import React from "react";
import SubscriptionForm from "./SubscriptionForm";
import "./Subscribe.scss";

const Subscribe = ({ displayAuthor, subscribedToAuthor, subscriptionForAuthor, subscriptionSuccess }) => {
    return (
        <div id="subscribe-page" className="page-container">
            <h1 className="h1">Subscribe</h1>
            {(!subscribedToAuthor ||!subscriptionForAuthor.verification_sent_at) && (
                <p className="p1">
                    You'll only receive an email when the author publishes something new.
                </p>
            )}
            <div id="subscription-form">
                <SubscriptionForm
                    subscribedToAuthor={subscribedToAuthor}
                    subscriptionForAuthor={subscriptionForAuthor}
                    subscriptionSuccess={subscriptionSuccess}
                    author={displayAuthor}
                >
                </SubscriptionForm>
            </div>
            {(!subscribedToAuthor ||!subscriptionForAuthor.verification_sent_at) && (
                <p className="p1 subscribe-page__rss-feed">
                    Or view their{" "}
                    <a href={displayAuthor.rss_url} data-turbolinks="false">RSS feed</a>.
                </p>
            )}
        </div>
    );
};

export default Subscribe;
