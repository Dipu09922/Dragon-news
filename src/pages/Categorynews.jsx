import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import NewsCart from "../component/NewsCart";

const Categorynews = () => {
  const { id } = useParams();
  const [categoryNews, setcategoryNews] = useState([]);

  const data = useLoaderData();
  //    console.log(data)
  useEffect(() => {
    if (id == "0") {
      setcategoryNews(data);
    } 
    else if (id == "1") 
        {
      const filterData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setcategoryNews(filterData);
    } 
    else {
      const filterData = data.filter((news) => news.category_id == id);
    //   console.log(filterData);
      setcategoryNews(filterData);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="font-bold mb-5">Total <span className="text-secondary">{categoryNews.length}</span> news found</h1>

      <div className="grid grid-cols-1 gap-5">
        {
         categoryNews.map(news=> <NewsCart key={news.id} news={news}></NewsCart>)
        }
      </div>
    </div>
  );
};

export default Categorynews;