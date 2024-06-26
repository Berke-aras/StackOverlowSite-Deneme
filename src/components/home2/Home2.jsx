import React from "react";
import "./Home2.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { FaHubspot } from "react-icons/fa";
import { TbPencilCog } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { GoShieldLock } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiBreakingChain } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { PiMountainsFill } from "react-icons/pi";
import { IoMdCode } from "react-icons/io";
import { RiQuestionnaireFill } from "react-icons/ri";
import { SiSlack } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiOkta } from "react-icons/si";
import { FaUnlockAlt } from "react-icons/fa";

const Home2 = () => {
    return (
        <section className="home2">
            <div className="imgs">
                <img src="" alt="" className="img img1" />
                <img src="" alt="" className="img img2" />
                <img src="" alt="" className="img img3" />
            </div>

            <div className="home2-container">
                <div className="teams1-container">
                    <svg
                        aria-hidden="true"
                        className="svg-icon iconLogoTeams native mb32"
                        width="186"
                        viewBox="0 0 146 36"
                    >
                        <path
                            d="M33.9 18.9l-1.62-.2c-1.25-.09-1.82-.57-1.82-1.53 0-1.05.76-1.73 2.3-1.73 1.05 0 2.01.3 2.68.77l.96-.96a5.67 5.67 0 00-3.64-1.05c-2.2 0-3.74 1.15-3.74 2.97 0 1.73 1.05 2.6 3.07 2.78l1.72.2c1.15.09 1.73.57 1.73 1.53 0 1.25-1.06 1.82-2.69 1.82-1.24 0-2.4-.29-3.16-1.15l-.96.96c1.15 1.06 2.5 1.44 4.22 1.44 2.5 0 4.12-1.15 4.12-3.07-.19-1.92-1.43-2.6-3.16-2.78h-.01zm12.77-4.6c-1.63 0-2.69.28-3.55 1.43l.96.96c.57-.86 1.24-1.15 2.59-1.15 1.82 0 2.59.77 2.59 2.2v.97h-3.07c-2.3 0-3.55 1.15-3.55 2.97 0 .77.29 1.53.77 2.11.67.67 1.44.96 2.87.96 1.35 0 2.11-.29 2.98-1.06v.96h1.53v-6.9c-.1-2.3-1.44-3.46-4.12-3.46v.01zm2.59 6.7c0 .87-.2 1.45-.48 1.73-.67.58-1.44.68-2.3.68-1.63 0-2.3-.58-2.3-1.73s.76-1.82 2.3-1.82h2.87l-.1 1.15.01-.01zm7.29-5.36c.96 0 1.53.28 2.3 1.15l.96-.96c-1.06-1.15-1.92-1.54-3.36-1.54-2.59 0-4.5 1.73-4.5 5.28 0 3.45 1.91 5.28 4.5 5.28 1.44 0 2.3-.39 3.36-1.54l-1.06-.96c-.76.86-1.34 1.15-2.3 1.15-.96 0-1.82-.38-2.4-1.15-.48-.67-.67-1.44-.67-2.78 0-1.25.2-2.11.67-2.78a3.23 3.23 0 012.5-1.15zm12.85-1.25h-1.82l-4.6 4.5V9.8h-1.54v14.77h1.54v-3.74L64.8 19l3.45 5.57h1.82l-4.22-6.62 3.55-3.55v-.01zm7-.29c-1.53 0-2.58.58-3.26 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.63-1.34-3.26-1.34h-.01zm1.25 7.96c-.29.3-.67.48-1.24.48-.58 0-.96-.19-1.25-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59a1.7 1.7 0 011.25-.48c.57 0 .95.2 1.24.48.58.58.58 1.44.58 2.6.1 1.14 0 2.1-.58 2.58zm10.36-7.86l-2.1 6.62-2.21-6.62h-2.8l3.94 10.65h2.1L90.9 14.2h-2.89zm7.3-.1c-2.79 0-4.61 1.92-4.61 5.47 0 4.32 2.4 5.47 4.9 5.47 1.91 0 2.96-.58 4.02-1.63l-1.63-1.54c-.67.67-1.25.96-2.4.96-1.53 0-2.3-.96-2.3-2.4h6.62v-1.15c0-3.07-1.63-5.18-4.6-5.18zm-2.02 4.41c0-.48.1-.76.29-1.15.28-.67.86-1.15 1.82-1.15.86 0 1.53.48 1.82 1.15.2.39.2.67.29 1.15h-4.22zm10.55-3.26V14.2h-2.59v10.65h2.69v-6.43c0-1.35.86-1.92 1.72-1.92.68 0 .96.2 1.44.67l2.02-2.01c-.77-.77-1.44-.96-2.5-.96-1.24-.1-2.2.38-2.78 1.05zm5.39-2.2v11.8h2.69V16.4h1.92v-2h-1.92v-1.15c0-.58.28-.96.96-.96h1.05v-2.2h-1.53c-2.21 0-3.17 1.53-3.17 2.97v-.01zm16.2 1.05c-1.54 0-2.6.58-3.27 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.26 1.35c1.54 0 2.7-.58 3.27-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.73-1.34-3.27-1.34h.01zm1.24 7.96c-.29.3-.67.48-1.25.48-.57 0-.95-.19-1.24-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59.29-.28.67-.48 1.24-.48.58 0 .96.2 1.25.48.58.58.58 1.44.58 2.6 0 1.14 0 2.1-.58 2.58zm15.83-7.86l-1.73 6.62-2.2-6.62h-1.92l-2.2 6.62-1.73-6.62h-2.79l3.26 10.65h2.21l2.2-6.72 2.21 6.72h2.21l3.26-10.65h-2.78zm-24.57 7.38V9.98h-2.68v11.8c0 1.53.96 3.07 3.07 3.07h1.53v-2.21h-.96c-.67 0-.96-.39-.96-1.06zm-76.92-5.56l1.34-1.34h-2.88v-3.36h-1.53v10.65c0 1.53.86 2.78 2.59 2.78h1.05V23.5h-.76c-.96 0-1.44-.57-1.44-1.53v-5.85l1.63-.1z"
                            fill="#fff"
                        ></path>
                        <path
                            d="M21 27v-8h3v11H0V19h3v8h18z"
                            fill="#BCBBBB"
                        ></path>
                        <path
                            d="M5.4 19.1l13.6 2 .2-2.4-13.3-2.6-.5 3zm1.8-6.8l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm3.4-5.9l10.2 8.5 1.7-2-10.2-8.5-1.7 2zM17.1.2L15 1.8l7.9 10.6 2.1-1.6L17.1.2zM5 25h14v-3H5v3zm24 10.86V28h5v1.58h-3.03v1.57h2.52v1.59h-2.52v3.1H29v.02zm6.02-3.03v-1.8c0-1.21.18-1.85.66-2.36.54-.57 1.23-.8 2.4-.8 1.23 0 1.97.28 2.5.94.38.48.54 1.1.54 2.22v1.8c0 1.21-.18 1.85-.66 2.37-.54.56-1.22.8-2.39.8-1.24 0-1.98-.28-2.5-.94-.4-.49-.55-1.1-.55-2.23zm4.14-.15v-1.5c0-1.36-.23-1.73-1.09-1.73-.86 0-1.09.37-1.09 1.73v1.5c0 1.36.23 1.74 1.1 1.74.85 0 1.08-.38 1.08-1.74zm4.88.14v3.04h-1.96V28h3.08c1.1 0 1.67.15 2.09.57.4.4.57.93.57 1.8 0 1.35-.37 2-1.35 2.29l1.7 3.19h-2.18l-1.43-3.04h-.52v.01zM44 31.34h.96c.7 0 .92-.22.92-.9 0-.66-.23-.88-.92-.88H44v1.78zm9.05 4.52v-6.27h-2.02V28h6v1.58h-2.02v6.27h-1.96v.01zm4.98 0V28h5.08v1.58h-3.14v1.52h2.65v1.58h-2.65v1.59h3.2v1.58h-5.14v.01zm10.21-1.39h-2.5l-.42 1.39H63.2L66.03 28h1.9l2.84 7.85h-2.1l-.43-1.39v.01zm-.46-1.55L67 30.27l-.8 2.65h1.58zm3.46 2.94V28h1.81l1.88 3.9 1.88-3.9h1.82v7.85h-1.87v-4.24l-1.2 2.48H74.3l-1.2-2.48v4.24h-1.87l.01.01zm8.17-1.32l1.48-.95c.36.6.82.84 1.65.84.7 0 1.03-.25 1.03-.78 0-.42-.22-.64-.8-.78-1.37-.34-1.66-.44-2.07-.7-.63-.41-.92-1-.92-1.89 0-1.57.96-2.4 2.75-2.4 1.36 0 2.21.43 2.75 1.38l-1.44.91c-.38-.54-.75-.73-1.34-.73-.55 0-.85.25-.85.71 0 .53.3.75 1.36 1.01 1 .26 1.24.34 1.64.6.53.35.79.92.79 1.8 0 .86-.21 1.42-.66 1.8-.5.42-1.28.64-2.26.64-.9 0-1.74-.2-2.29-.56a2.2 2.2 0 01-.82-.9z"
                            fill="#F48024"
                        ></path>
                    </svg>

                    <p className="teams-p">
                        Capture your company’s knowledge and context in a <br />
                        discoverable format to
                        <span className="colorchanger">unblock your team</span>
                    </p>
                    <a href="" className="teams-button">
                        Take a tour of Teams
                    </a>
                    <ul className="teams-ul">
                        <li className="teams-li">
                            <IoCheckmarkCircle />
                            <p className="teams-li-p-strong">
                                Increase productivity
                            </p>
                            <p className="teams-li-p">
                                If somebody somewhere has the right answer,
                                suddenly you have it too. Collaborate better in
                                a remote-first world.
                            </p>
                        </li>

                        <li className="teams-li">
                            <IoCheckmarkCircle />
                            <p className="teams-li-p-strong">
                                Accelerate time to market
                            </p>
                            <p className="teams-li-p">
                                Shorten the time between initial idea and
                                complete product. Take delays and misinformation
                                out of the equation.
                            </p>
                        </li>

                        <li className="teams-li">
                            <IoCheckmarkCircle />
                            <p className="teams-li-p-strong">
                                Protect institutional knowledge
                            </p>
                            <p className="teams-li-p">
                                People come and people go, but if you capture
                                their contributions in one central place, that
                                expertise sticks around.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="teams2-hr"></div>

                <div className="teams2-container">
                    <p className="teams2-tp">
                        Ensure your company stays on course
                    </p>
                    <p className="teams2-tp2">
                        Here are just a few types of technologists that we help.
                    </p>

                    <ul className="teams2-list">
                        <li>
                            <GoRocket className="teams2-icon" />
                            <p className="teams2-title">DevOps engineers</p>
                            <p className="teams2-exp">
                                Shipping new products and features requires
                                teamwork and coordination. Forget checklists and
                                long docs no one ever reads.
                            </p>
                        </li>

                        <li>
                            <FaHubspot className="teams2-icon" />

                            <p className="teams2-title">Data scientists</p>
                            <p className="teams2-exp">
                                Business decisions are better when backed by
                                data. Give visibility to the data that support
                                your strategies.
                            </p>
                        </li>

                        <li className="active-li">
                            <TbPencilCog className="teams2-icon active" />

                            <p className="teams2-title">Software engineers</p>
                            <p className="teams2-exp">
                                Help engineers be more efficient and streamline
                                knowledge sharing using a tool they already love
                                and trust.
                            </p>
                        </li>

                        <li>
                            <FaHeadset className="teams2-icon" />

                            <p className="teams2-title">Support teams</p>
                            <p className="teams2-exp">
                                Level up your support by providing information
                                to your customers using a natural interface:
                                questions and answers.
                            </p>
                        </li>

                        <li>
                            <FaPeopleGroup className="teams2-icon" />

                            <p className="teams2-title">Engineering leaders</p>
                            <p className="teams2-exp">
                                Help your team get the information they need to
                                do their job - reduce burnout and help engineers
                                grow and learn together.
                            </p>
                        </li>
                    </ul>

                    <div className="teams2-plans">
                        <div className="check"></div>
                        <div className="plans">
                            <ul>
                                <li className="plans-cart">
                                    <p className="cart-point ">Free</p>
                                    <p className="cart-title">Free</p>
                                    <p className="cart-text">
                                        No credit card required
                                    </p>
                                    <div className="hr1 cart-color2"></div>
                                    <p className="cart-info">
                                        <GrAnnounce className="plans-icon" />
                                        ChatOps integrations - Slack & Microsoft
                                        Teams
                                    </p>
                                    <p className="cart-info">
                                        <GoShieldLock className="plans-icon" />
                                        Your own private space hosted on
                                        stackoverflowteams.com
                                    </p>
                                    <p className="cart-info">
                                        <FaBoxArchive className="plans-icon" />
                                        Structured and searchable knowledge base
                                    </p>
                                    <div className="space-plans"></div>
                                    <button className="cart-btn">
                                        Create free Team
                                    </button>
                                    <p className="cart-text plans-text">
                                        Always free up to 50 teammates
                                    </p>
                                </li>

                                <li className="plans-cart">
                                    <p className="cart-point cart-color2">
                                        Basic
                                    </p>
                                    <p className="cart-title">$6.50 USD</p>
                                    <p className="cart-text">
                                        per teammate / month
                                    </p>
                                    <div className="hr1 cart-color2"></div>
                                    <p className="cart-info">
                                        <FaKey className="plans-icon" />
                                        Single sign-on (SSO) with SAML + Okta
                                        integration
                                    </p>
                                    <p className="cart-info">
                                        <GrAnnounce className="plans-icon" />
                                        ChatOps integrations - Slack & Microsoft
                                        Teams
                                    </p>
                                    <p className="cart-info">
                                        <GoShieldLock className="plans-icon" />
                                        Your own private space hosted on
                                        stackoverflowteams.com
                                    </p>
                                    <p className="cart-info">
                                        <FaBoxArchive className="plans-icon" />
                                        Structured and searchable knowledge base
                                    </p>
                                    <div className="space-plans2"></div>
                                    <button className="cart-btn cart-color2 ">
                                        Get started
                                    </button>
                                    <p className="cart-text plans-text">
                                        Up to 250 teammates
                                    </p>
                                </li>

                                <li className="plans-cart">
                                    <p className="cart-point cart-color3">
                                        Business
                                    </p>
                                    <p className="cart-title">$13.50 USD</p>
                                    <p className="cart-text">
                                        per teammate / month
                                    </p>
                                    <div className="hr1 cart-color2"></div>
                                    <p className="cart-text">
                                        <FaPlus className="plans-icon" />
                                        All the features of Basic plus…
                                    </p>
                                    <p className="cart-info">
                                        <IoNewspaperOutline />
                                        Long-form knowledge with Articles
                                    </p>
                                    <p className="cart-info">
                                        <GiBreakingChain className="plans-icon" />
                                        Additional integrations — ChatOps, Jira,
                                        GitHub & Okta
                                    </p>
                                    <p className="cart-info">
                                        <FaRegNewspaper className="plans-icon" />
                                        Group content together into Collections
                                    </p>
                                    <p className="cart-info">
                                        <ImStatsBars className="plans-icon" />
                                        Usage and adoption metrics
                                    </p>
                                    <p className="cart-info">
                                        <BsShieldFillPlus className="plans-icon" />
                                        Priority customer support
                                    </p>
                                    <p className="cart-info">
                                        <FaWrench className="plans-icon" />
                                        Content Health tools
                                    </p>

                                    <button className="cart-btn cart-color3 ">
                                        Get started
                                    </button>
                                    <p className="cart-text plans-text">
                                        Unlimited teammates
                                    </p>
                                </li>

                                <li className="plans-cart">
                                    <p className="cart-point cart-color4">
                                        Enterprise
                                    </p>
                                    <p className="cart-title">Custom pricing</p>
                                    <p className="cart-text">
                                        Let’s talk about what you need
                                    </p>
                                    <div className="hr1 cart-color2"></div>
                                    <p className="cart-text">
                                        <FaPlus className="plans-icon" />
                                        Premium features of Business plus…
                                    </p>
                                    <p className="cart-info">
                                        <FaPeopleGroup className="plans-icon" />
                                        Unlimited Teams within your instance
                                    </p>
                                    <p className="cart-info">
                                        <PiMountainsFill className="plans-icon" />
                                        Flexible hosting options — cloud or
                                        on-premises
                                    </p>
                                    <p className="cart-info">
                                        <IoMdCode className="plans-icon" />
                                        Robust read and write API
                                    </p>
                                    <p className="cart-info">
                                        <RiQuestionnaireFill className="plans-icon" />
                                        Your own customer success and community
                                        building representative
                                    </p>
                                    <p className="cart-info">
                                        <BsShieldFillPlus className="plans-icon" />
                                        99.5% uptime SLA and priority support
                                    </p>

                                    <button className="cart-btn cart-color4">
                                        Request a demo
                                    </button>

                                    <p className="cart-text plans-text">
                                        Unlimited teammates
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="inform">
                        <ul className="inform-ul">
                            <li className="inform-li">
                                A Forrester Consulting study shows
                                <span className="inform-blue">
                                    191% return on investment
                                </span>
                                with Stack Overflow for Teams.
                            </li>
                            <li className="inform-li">
                                The world’s largest telecom firm
                                <span className="inform-blue">saved $10M</span>
                                in deflected support cases with our centralized
                                knowledge base.
                            </li>
                            <li className="inform-li">
                                Subject-matter experts at software platform
                                Unqork had
                                <span className="inform-blue">
                                    27% more time
                                </span>
                                to work on projects after using Teams.
                            </li>
                            <li className="inform-li">
                                You can save time and money with Stack Overflow
                                for Teams.
                                <a href="" className="inform-button">
                                    Calculate your ROI
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="inform-about-container">
                    <div className="inform-about">
                        <p className="inform-about-title">
                            Integrates with and improves other tools
                        </p>
                        <p className="inform-about-exp">
                            All plans come with integrations for ChatOps tools
                            <span className="inform-about-blue">Slack</span>&
                            <span className="inform-about-blue">Microsoft</span>
                            Teams in order to cut down on pings, limit
                            distractions and make the tools even more powerful.
                            Business and Enterprise customers get access to
                            Jira, GitHub & Okta integrations.
                        </p>
                        <ul className="inform-about-ul">
                            <li className="inform-about-li">
                                <SiSlack />
                            </li>
                            <li className="inform-about-li">
                                <BsMicrosoftTeams />
                            </li>
                            <li className="inform-about-li">
                                <FaGithub />
                            </li>
                            <li className="inform-about-li">
                                <SiJira />
                            </li>
                            <li className="inform-about-li">
                                <SiOkta />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="inform-features-container">
                    <div className="inform-features">
                        <p className="inform-about-exp">
                            Some of the premium features available with paid
                            tiers
                        </p>
                        <ul className="inform-features-ul">
                            <li className="inform-features-li">
                                <FaKey className="inform-features-icon" />
                                <p>Robust read and write API</p>
                            </li>
                            <li className="inform-features-li">
                                <FaUnlockAlt className="inform-features-icon" />
                                <p>Single sign-on with AD or SAML</p>
                            </li>
                            <li className="inform-features-li">
                                <FaPeopleGroup className="inform-features-icon" />
                                <p>Your own customer success representative</p>
                            </li>
                            <li className="inform-features-li">
                                <FaHeadset className="inform-features-icon" />
                                <p>99.5% uptime SLA and priority support</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home2;
