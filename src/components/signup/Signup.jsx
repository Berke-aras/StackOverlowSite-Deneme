import React from "react";
import "./Signup.css";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoMdPricetags } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import Navbar from "../Navbar/Navbar";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="signup">
                <div className="signup-container">
                    <div className="signup-content1">
                        <div className="signup-logo">
                            <svg
                                aria-hidden="true"
                                width="253"
                                height="50"
                                viewBox="0 0 253 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M35.8552 32.177V45.3321H4.86813V32.177H0.200195V50H40.5142V32.177H35.8552Z"
                                    fill="#BCBBBB"
                                ></path>
                                <path
                                    d="M9.13574 41.0885H31.6026V36.8449H9.13574V41.0885ZM9.5848 30.9399L31.4089 35.5202L32.307 31.1644L10.4829 26.584L9.5848 30.9399ZM12.4587 20.4769L32.6662 29.907L34.5523 25.8655L14.3448 16.4354L12.4587 20.4769ZM18.0719 10.5528L35.2258 24.8327L38.0998 21.4199L20.901 7.13997L18.0719 10.5528ZM29.1187 0L25.5263 2.64942L38.8183 20.5667L42.4107 17.9173L29.1187 0Z"
                                    fill="#F48024"
                                ></path>
                                <path
                                    d="M57.8981 31.0824L55.0323 30.8218C52.7743 30.6481 51.9059 29.7218 51.9059 28.2165C51.9059 26.3928 53.2954 25.2638 55.9007 25.2638C57.7534 25.2638 59.3744 25.6981 60.6481 26.6823L62.3561 24.9744C60.7639 23.6717 58.4771 23.0638 55.9296 23.0638C52.1085 23.0638 49.3585 25.0323 49.3585 28.3034C49.3585 31.256 51.2112 32.8192 54.6849 33.1087L57.6376 33.3692C59.6929 33.5429 60.6192 34.4113 60.6192 35.9745C60.6192 38.0877 58.7955 39.1298 55.8717 39.1298C53.6428 39.1298 51.7322 38.5509 50.3138 37.0745L48.5769 38.8114C50.5454 40.693 52.8901 41.3878 55.9007 41.3878C60.2139 41.3878 63.1666 39.3904 63.1666 35.9456C63.1666 32.5876 61.0245 31.3718 57.8981 31.0824ZM80.2458 23.0638C77.38 23.0638 75.5852 23.6428 73.9931 25.6402C73.9641 25.6691 75.701 27.3481 75.701 27.3481C76.7431 25.8717 77.93 25.3217 80.2168 25.3217C83.4879 25.3217 84.7906 26.6244 84.7906 29.2297V30.9376H79.4063C75.4115 30.9376 73.2404 32.964 73.2404 36.0903C73.2404 37.5088 73.7036 38.8404 74.572 39.7088C75.701 40.8667 77.1484 41.3299 79.6089 41.3299C82.0116 41.3299 83.3143 40.8667 84.7617 39.4193V41.1272H87.367V28.9981C87.3959 25.1481 85.0511 23.0638 80.2458 23.0638ZM84.7906 34.8166C84.7906 36.293 84.5011 37.3351 83.8932 37.914C82.7643 39.014 81.4327 39.1009 79.8984 39.1009C77.0615 39.1009 75.7878 38.1167 75.7878 36.0614C75.7878 34.0061 77.0905 32.9061 79.7826 32.9061H84.7906V34.8166ZM97.6434 25.3796C99.3513 25.3796 100.393 25.9007 101.754 27.377L103.491 25.6691C101.667 23.7007 100.104 23.0638 97.6434 23.0638C93.1276 23.0638 89.7407 26.1033 89.7407 32.2113C89.7407 38.3193 93.1565 41.3588 97.6434 41.3588C100.104 41.3588 101.667 40.693 103.52 38.6956L101.754 36.9877C100.422 38.464 99.3513 39.014 97.6434 39.014C95.9066 39.014 94.4592 38.3193 93.5039 36.9877C92.6644 35.8298 92.346 34.4403 92.346 32.1824C92.346 29.9244 92.6644 28.5639 93.5039 27.377C94.4592 26.0744 95.9066 25.3796 97.6434 25.3796ZM120.02 23.2664H116.749L108.644 31.1402V15.3058H106.038V41.1562H108.644V34.6429L111.828 31.4587L117.82 41.1562H121.062L113.652 29.635L120.02 23.2664ZM132.323 22.3401C129.573 22.3401 127.72 23.4112 126.562 24.627C124.883 26.3639 124.449 28.477 124.449 31.835C124.449 35.2219 124.883 37.3351 126.562 39.0719C127.691 40.2877 129.573 41.3588 132.323 41.3588C135.073 41.3588 136.955 40.2877 138.112 39.0719C139.791 37.3351 140.226 35.2219 140.226 31.835C140.226 28.477 139.791 26.3639 138.112 24.627C136.955 23.4112 135.073 22.3401 132.323 22.3401ZM134.494 36.3509C133.944 36.9009 133.249 37.1614 132.323 37.1614C131.397 37.1614 130.702 36.8719 130.181 36.3509C129.225 35.3956 129.11 33.7455 129.11 31.806C129.11 29.8665 129.225 28.2744 130.181 27.3191C130.731 26.7691 131.397 26.5086 132.323 26.5086C133.249 26.5086 133.973 26.7981 134.494 27.3191C135.449 28.2744 135.565 29.8955 135.565 31.806C135.565 33.7455 135.449 35.3956 134.494 36.3509ZM152.557 22.5428L148.794 34.035L145.002 22.5428H140.139L146.999 41.1562H150.647L157.479 22.5428H152.557ZM165.352 22.3401C160.518 22.3401 157.247 25.756 157.247 31.835C157.247 39.3614 161.473 41.3588 165.844 41.3588C169.202 41.3588 171.026 40.3167 172.908 38.4351L170.1 35.6851C168.913 36.8719 167.929 37.4219 165.873 37.4219C163.268 37.4219 161.792 35.6851 161.792 33.2824H173.429V31.1981C173.458 26.1033 170.534 22.3401 165.352 22.3401ZM161.821 30.0981C161.85 29.2876 161.965 28.7665 162.255 28.1007C162.747 27.0007 163.789 26.1612 165.352 26.1612C166.915 26.1612 167.958 26.9718 168.45 28.1007C168.739 28.7665 168.855 29.2876 168.884 30.0981H161.821ZM180.318 24.3375V22.5428H175.774V41.1562H180.405V29.9534C180.405 27.6086 181.968 26.5375 183.416 26.5375C184.545 26.5375 185.153 26.9139 185.876 27.6376L189.379 24.1059C188.105 22.8322 186.803 22.3691 184.979 22.3691C183.01 22.3401 181.216 23.2664 180.318 24.3375ZM190.826 20.6032V41.1272H195.458V26.4507H198.903V22.9191H195.487V20.8927C195.487 19.8217 196.037 19.2138 197.137 19.2138H198.932V15.2769H196.298C192.476 15.2769 190.826 17.969 190.826 20.6032ZM218.008 22.3401C215.258 22.3401 213.406 23.4112 212.248 24.627C210.569 26.3639 210.135 28.477 210.135 31.835C210.135 35.2219 210.569 37.3351 212.248 39.0719C213.377 40.2877 215.258 41.3588 218.008 41.3588C220.758 41.3588 222.64 40.2877 223.798 39.0719C225.477 37.3351 225.911 35.2219 225.911 31.835C225.911 28.477 225.477 26.3639 223.798 24.627C222.669 23.4112 220.758 22.3401 218.008 22.3401ZM220.208 36.3509C219.658 36.9009 218.964 37.1614 218.037 37.1614C217.111 37.1614 216.416 36.8719 215.895 36.3509C214.94 35.3956 214.824 33.7455 214.824 31.806C214.824 29.8665 214.94 28.2744 215.895 27.3191C216.445 26.7691 217.111 26.5086 218.037 26.5086C218.964 26.5086 219.687 26.7981 220.208 27.3191C221.164 28.2744 221.279 29.8955 221.279 31.806C221.279 33.7455 221.164 35.3956 220.208 36.3509ZM247.854 22.5428L244.843 34.035L241.022 22.5428H237.635L233.843 34.035L230.832 22.5428H225.911L231.614 41.1562H235.435L239.314 29.4902L243.193 41.1562H247.014L252.746 22.5428H247.854ZM205.763 35.5403V15.2769H201.132V35.8298C201.132 38.464 202.753 41.1562 206.574 41.1562H209.208V37.2193H207.413C206.227 37.2193 205.763 36.6403 205.763 35.5403ZM70.4035 26.1033L72.8062 23.7007H67.8561V17.7953H65.2508V36.3509C65.2508 39.014 66.7851 41.1562 69.8246 41.1562H71.6772V38.8983H70.2878C68.6088 38.8983 67.8561 37.914 67.8561 36.293V26.1033H70.4035Z"
                                    fill="#222426"
                                ></path>
                            </svg>
                        </div>
                        <span className="signup-content1-text">
                            <RiQuestionnaireFill className="signup-content1-icon" />
                            <p> Get unstuck - ask a question!</p>
                        </span>
                        <span className="signup-content1-text">
                            <IoMdPricetags className="signup-content1-icon" />
                            <p> Save your favorite posts, tags and filters</p>
                        </span>
                        <span className="signup-content1-text">
                            <TfiCup className="signup-content1-icon" />
                            <p> Answer questions and earn reputation</p>
                        </span>
                        <p className="signup-p-gray">
                            Collaborate and share knowledge with a private group
                            for FREE.
                        </p>
                        <p className="signup-p-blue">
                            Get Stack Overflow for Teams free for up to 50
                            users.
                        </p>
                    </div>

                    <div className="signup-content2">
                        <div className="signup-content2-titles">
                            <p className="signup-content2-title">
                                Create your account
                            </p>
                            <p className="signup-content2-t">
                                By clicking “Sign up”, you agree to our terms of
                                service and acknowledge you have read our
                                privacy policy.
                            </p>
                        </div>
                        <form action="" className="signup-form">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">Password</label>
                            <input type="text" />
                            <p>
                                Must contain 8+ characters, including at least 1
                                letter and 1 number.
                            </p>
                            <input
                                type="submit"
                                value="Sign up"
                                className="signup-submit"
                            />
                        </form>

                        <div className="signup-hr"></div>

                        <a href="" className="signup-google">
                            <FaGoogle className="signup-icon" />
                            Sign up with Google
                        </a>
                        <a href="" className="signup-github">
                            <FaGithub className="signup-icon" />
                            Sign up with GitHub
                        </a>
                    </div>

                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    );
};

export default Signup;