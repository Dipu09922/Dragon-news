// NewsCard.jsx

import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    image_url,
    details,
    tags,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      

      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-2xl font-bold leading-snug">
          {title}
        </h2>

        {/* Image */}
        <figure className="rounded-xl overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="w-full h-[260px] object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 text-sm leading-7">
          {details.slice(0, 250)}...
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline badge-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4 mt-2">
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              {[...Array(rating.number)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <span className="font-semibold">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;