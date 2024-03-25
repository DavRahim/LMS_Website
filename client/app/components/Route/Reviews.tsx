import { styles } from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import ReviewCard from "../review/ReviewCard";

type Props = {};

export const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas!Lorem ipsum dolor sit ! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambraidage university",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas! "
    },

]

const Reviews = (props: Props) => {

    return (
        <div className="w-[90%] 800px:w-[85%] m-auto">
            <div className="w-full 800px:flex items-center">
                <div className="800px:w-[50%] w-full">
                    <Image
                        src={require("../../../public/business-image.webp")}
                        alt="business"
                        width={700}
                        height={700}

                    />
                </div>
                <div className="800px:w-[50%] w-full">
                    <h3 className={`${styles.title} 800px:!text-[40px]`}
                    >
                        Our Student Are <span className="text-blue-700">
                            Our Strength {" "} <br /> See What They say about us
                        </span>
                    </h3>
                    <br />
                    <p className={styles.label}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus rerum beatae inventore deleniti atque nemo? Voluptate id harum voluptas!
                    </p>

                </div>
                <br />
                <br />
            </div>
            <div className="grid mt-10 grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*nth-child(6)]:!mt-[-40px]">
                {
                    reviews && reviews.map((i, index) => <ReviewCard item={i} key={index} />)
                }
            </div>
        </div>
    );
};

export default Reviews;
