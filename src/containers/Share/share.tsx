import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from "../../components/Forms/checkoutForms";
import { useLocation, useParams } from 'react-router';
import { FacebookShareButton } from 'react-share';
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import { baseURL } from '../../utils/baseUrl';
const stripePromise = loadStripe('pk_live_51IZLFAAZXrFYZHGJFDEXMmZPKXL3YYDTPziTPassmkBUjIBKSWyEBl0QRHcALQhqKncjfHA8HB5eyNJfcSa6nS2Z00tCyi303y');

export const Share = () => {
    const location = useLocation().search;
    const urlParams = new URLSearchParams(location);
    const image = urlParams.get('image');
    const name = urlParams.get('name');
    const campaignId = urlParams.get('campaignId');
    const studentId = urlParams.get('studentId');
    console.log(image);
    
    return (
        <>
            <div className="row" style={{paddingTop: "50px"}} >
                <div className="col-lg-6">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm campaignId={campaignId || ""} studentId={studentId || ""} />
                    </Elements>
                </div>
                <div className="col-lg-6">
                <h3 className="studntNameShare">{name}</h3>

                    <div className="card ">

                        {!!image && 
                        <div className="shareImage ">
                            <img className="shareImageImg" src={image} alt="student Image"/>
                        </div>
                        }
                       
                    
                    </div>

                    <div>
                        <FacebookShareButton className="shareitemStu" id="share-btn" url={`${baseURL}/#/share?${`name=${name}&`}${`image=${baseURL}/${image}&`}${`campaignId=${campaignId}&`}${`studentId=${studentId}`}`} >
                            <span style={{ fontWeight: 600, textAlign:"center", width: "100%" }}> <RedBackgroundButton style={{padding: "10px 20px"}}>Share Link</RedBackgroundButton> </span>
                        </FacebookShareButton >

                      
                        </div>

                </div>
            </div>

        </>
    )
}


export default Share
