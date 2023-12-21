import React from 'react'
import Card from './components/Card'

function App() {
  
  let data=[
    {
plan:"FREE",
Price:0,

user:"single user",
isUser:true,
storage:"5GB Storage",
isStorage:true,
publicprojects:"unlimted public projects",
ispublicprojects:true,
communityacess:"community access",
iscommunityacess:true,
subdomain:"free subdomain",
isSubdomain:false,
reports:"monthly status reports",
isReports:false
  },
  {
    plan:"plus",
    Price:9,
    user:"5 user",
    isUser:true,

    storage:"50GB Storage",
    isStorage:true,
    publicprojects:"unlimted public projects",
    ispublicprojects:true,

    communityacess:"dedicate phone support",
    iscommunityacess:true,

    subdomain:"free subdomain",
    isSubdomain:true,

    reports:"monthly status reports",
    isReports:false

      },
      {
        plan:"pro",
        Price:49,
        user:"unlimited user",
        isUser:true,

        storage:"5GB Storage",
        isStorage:true,
        publicprojects:"unlimted public projects",
        ispublicprojects:true,

        communityacess:"dedicate phone support",
        iscommunityacess:true,

        subdomain:"free subdomain",
        isSubdomain:true,

        reports:"monthly status reports",
        isReports:true


          }
]
  
  
  
  
  return <>
  <section className="pricing py-5">
  <div className="container">
    {
    data.map((e,i)=>{
return < Card data={e} key={i}/>
    })
}
     </div>
</section>
</>
}

export default App