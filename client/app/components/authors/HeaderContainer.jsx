import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { IcListed, IcMenu, IcClose } from "../../assets/icons";
import { MenuContainer, AuthorInfo } from "./header";
import "./HeaderContainer.scss";

const HeaderContainer = ({
    homeUrl,
    author,
    post,
    privatePost,
    pages,
    authorGuestbookEntriesUrl,
    currentUrl,
    blogPage
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const renderMenu = isDesktopMenu => (
        <MenuContainer
            isMobileMenuOpen={isMobileMenuOpen}
            isDesktopMenu={isDesktopMenu}
            author={author}
            pages={pages}
            authorGuestbookEntriesUrl={authorGuestbookEntriesUrl}
            currentUrl={currentUrl}
        />
    );

    return (
        <div className={`page-header__container ${post ? "page-header__container--post" : ""}`}>
            <div id="page-header" >
                <div className="left">
                    <div className="website-name">
                        <a href={homeUrl} className="listed-logo-link">
                            <SVG src={IcListed} className="listed-logo" />
                        </a>
                    </div>
                    {author && !privatePost && (
                        <div className="author-name__container">
                            <div className="h4 author-name path-item">
                                <a href={author.url}>{author.title}</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="right">
                    <button className="button button--menu-icon" aria-label="Menu" aria-controls="navigation">
                        {isMobileMenuOpen 
                            ? <SVG src={IcClose} onClick={() => setIsMobileMenuOpen(false)} />
                            : <SVG src={IcMenu} onClick={() => setIsMobileMenuOpen(true)} />
                        }
                    </button>
                    {renderMenu(true)}
                </div>
            </div>
            {renderMenu(false)}
            {blogPage && (
                <AuthorInfo author={author} />
            )}
        </div>
    );
};

export default props => <HeaderContainer {...props} />;
