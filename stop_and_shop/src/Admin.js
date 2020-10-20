import React , {useEffect,useState } from 'react';
import './App.css';
import Post from './components/admin/post';
import ServiceLoadingComponent from './components/serviceLoading';
import SignUp from './components/register';
import axiosInstance from './axios';

function Admin(){
    const ServiceLoading = ServiceLoadingComponent(Post);
    const [appState , setAppState ] = useState({
        loading : true,
        posts:null,
    });
    useEffect(()=>{
        axiosInstance
        .get()
        .then((res)=>{
            console.log(res.data[0].id);
            const allPosts = res.data;
            setAppState({loading:false, posts:allPosts});
            console.log(res.data);
            console.log(res);
        });
    
    },[setAppState]);
    return (
        <div className="App">
            <h1> Latest Services & Goods</h1>
            <ServiceLoading isLoading={appState.loading} posts ={appState.posts} />
        </div>
    );
}
export default Admin;
