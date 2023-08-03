import Head from "next/head";
import { Text, Link, Navbar, Spacer, Divider, Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { levels } from "../data.jsx"
import { urls } from "../encodedurls.jsx";
import { useRouter } from "next/router.js"

export default function Home(props) {
    const router=useRouter();
    const level=urls.indexOf(router.query.level)+1
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5,minimum-scale=0.5"/>
        <div style={{height:"95vh",width:"100vw",backgroundColor:"black",color:"white",overflowWrap:"break-word"}} className="wrapper">
        <div style={{width:"80%"}} className="vertical">
        <Text h3>{levels[level]}</Text>
        </div>
        </div>
        </> 
    )
}

export async function getServerSideProps(context) {
    
    return {
        props: {
            "headers":context.req.rawHeaders
        }
    }
}