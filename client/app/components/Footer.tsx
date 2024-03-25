import React from "react";
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="border border-[#00000e] dark:border-[#ffffff1e]">
            <br />
            <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href={'/about'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href={'/privacy-policy'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={'/faq'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    FAQ
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
                        <ul className="space-y-4">

                            <li>
                                <Link href={'/courses'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href={'/profile'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href={'/course-dashboard'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Course Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Link</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href={'/youtube'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Youtube
                                </Link>
                            </li>
                            <li>
                                <Link href={'/youtube'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href={'/youtube'} className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    github
                                </Link>
                            </li>

                        </ul>

                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contract Info</h3>
                        <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
                            Call Us : 1.-09349-9

                        </p>
                        <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
                            Address : 7 Mohakhali Dhaka

                        </p>
                        <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
                            Mail us: elearning@gmail..com

                        </p>


                    </div>

                </div>
                <br />
                <p className="text-center text-black dark:text-white pb-5"> Copyright @ 2023 E-learning | All Rights</p>

            </div>
        </footer>
    );
};

export default Footer;
