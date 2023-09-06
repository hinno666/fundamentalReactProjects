import { useState } from "react";
import { useGetItemsList } from "@/hooks/useGetItemsList"
import { BtnContainer } from "./BtnContainer/BtnContainer";
import { JobInfo } from "./JobInfo/JobInfo";
import { Loader } from "../Loader/Loader";

import './Tabs.css'

const API_LINK = 'https://course-api.com/react-tabs-project';

export const Tabs = () => {
  const [isLoading, isError, data] = useGetItemsList(API_LINK);
  const [currentItem, setCurrentItem] = useState(0)

  return (
    <article className="tabs with-spacing" id="Tabs">
      {isError && <p>{data.msg}</p>}
      {isLoading ?
        <Loader /> :
        <>
          <div className="project__name">Tabs</div>
          <div className="tabs__container">
            <BtnContainer data={data} currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <JobInfo data={data} currentItem={currentItem} />
          </div>
        </>
      }
    </article>
  )
}
