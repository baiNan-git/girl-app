import React from 'react';
import { NavLink } from 'react-router-dom';


const Com = () => (
      <div className = "box">
      <div className = "content">
         <section className = "tj">
         <NavLink className = "tj_prolist" to='/detail/homedetail'>
           <img src = "images/img1.png" alt = "" className = "img_src"/>
           <p>今日穿搭，很oversize。</p> 
           <div className = "prolist_b">
             <div className = "prolist_l">
               <img alt = "" src = "images/t1.png" />
               <span>zl0818</span>
             </div>
             <div className = "prolist_r">
               <a href = "##" ><img alt = ""src = "images/scq.png" /></a>
               <span>16</span>
               <a href = "##"><img alt = ""src = "images/pl.png" /></a>
               <span>7</span>
               <a href = "##"><img alt = ""src = "images/dzq.png" /></a>
               <span>1</span>
             </div>
           </div>
         </NavLink>
      
         <div className = "tj_prolist">
           <img src = "images/img2.png" alt = "" className = "img_src"/>
           <p>今日穿搭，很oversize。</p> 
           <div className = "prolist_b">
             <div className = "prolist_l">
               <img alt = "" src = "images/t2.png" />
               <span>zl0818</span>
             </div>
             <div className = "prolist_r">
               <a href = "##" ><img alt = ""src = "images/scq.png" /></a>
               <span>16</span>
               <a href = "##"><img alt = ""src = "images/pl.png" /></a>
               <span>7</span>
               <a href = "##"><img alt = ""src = "images/dzq.png" /></a>
               <span>1</span>
             </div>
           </div>
         </div>
      
      
         <div className = "tj_prolist">
           <img src = "images/img3.png" alt = "" className = "img_src"/>
           <p>今日穿搭，很oversize。</p> 
           <div className = "prolist_b">
             <div className = "prolist_l">
               <img alt = "" src = "images/t3.png" />
               <span>zl0818</span>
             </div>
             <div className = "prolist_r">
               <a href = "##" ><img alt = ""src = "images/scq.png" /></a>
               <span>16</span>
               <a href = "##"><img alt = ""src = "images/pl.png" /></a>
               <span>7</span>
               <a href = "##"><img alt = ""src = "images/dzq.png" /></a>
               <span>1</span>
             </div>
           </div>
         </div>
       </section> 
        
      </div>
    </div>
    )

export default Com;
