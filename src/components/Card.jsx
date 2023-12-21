import React from 'react'

function Card({data}) {
    
  return <>
  
  <div className="row">
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.Price}<span className="period"></span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>
              <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.ispublicprojects?"":"text-muted"}><span className="fa-li"><i className={data.ispublicprojects?"fas fa-check":"fas fa-times"}></i></span>{data.publicprojects}</li>
              <li className={data.iscommunityacess?"":"text-muted"}><span className="fa-li"><i className={data.iscommunityacess?"fas fa-check":"fas fa-times"}></i></span>{data.communityacess}</li>
              <li className={data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
              <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
  
    </div>

  </>
}

export default Card