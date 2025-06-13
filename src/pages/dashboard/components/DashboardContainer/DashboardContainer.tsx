
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import CardBackground from "@/widgets/card/cardbackground";

interface DashboardContainerProps { }

export default function DashboardContainer({ }: DashboardContainerProps) {
  const navigate = useNavigate()

  const ClickNavigate = (link: any, currentpage: any) => {
    const data = {
      currentpage: currentpage,
    };
    navigate(link, { state: data })
  }

  useEffect(() => {

  }, [])


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardBackground  title={"Series"} description="Popular Series"
          actionButton={() => ClickNavigate(`/series`, 'series')}
        />
        <CardBackground  title={"Movies"} description="Popular Movies"
          actionButton={() => ClickNavigate(`/movies`, 'movies')}
        />
      </div>
    </div>
  )
}
