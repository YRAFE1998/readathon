import React, { useState } from 'react'
import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import ModalsHoc from '../../HOCS/modalsHoc';
import { LogAchivementInterface } from '../../interfaces/logAchivementsInterface';
import { logAchivements } from '../../Mocks/logAtchivments';
import LogAtchivementFormInput from '../../components/Forms/logAtchivementFormInput';
import { DonationPageStyles } from './donationPage.styles';
const DonationPage = () => {
    const [expand, setExpand] = useState(false);
    return (
        <DonationPageStyles>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="header">In These Crazy Tmes You Can Safely Raise Lost Of Money And Get kid Excited About Reading</h1>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">

                        <div className="img">
                            <img src="https://images.gofundme.com/vZFXkp2CrDqDMtg09TVArYtw9xo=/720x405/https://d2g8igdw686xgo.cloudfront.net/55380512_1616064937681581_r.jpeg" alt="" />
                        </div>

                        <div className="desc" style={{ height: expand ? "auto" : "170px" }}>
                            <p>
                                Cristy and Sebastian need a break. Since you’re just coming from reading their story-- I don’t need to elaborate much. But they've carried such a heavy load, for so long. They’ve been living hand to mouth over the past year-and-a-half. Unpaid medical bills are piling up. Unpaid rent is piling up. And they are stretched to their limits because there’s no money to hire employees.

                                They are the kind of people where a little help goes a long way. Both of them are so talented. Both of them are so hard working. The fact that they’ve managed to open a new restaurant during a pandemic, and survive for the past sixteen months—is a testament to their determination and the quality of Cristy’s food.

                                But they've had so many bad breaks in life. (Or as Sebastian would say, 'challenges  to make you go deeper.') The stress is reaching a breaking point. The instability is killing them, especially with five daughters at home. We just need to get this weight off their shoulders for long enough for them  to breathe a little, and find their footing. As Sebastian told me: ‘We just need a little push, and we are ready to row.’ (He then added five rower emojis.)

                                Cristy and Sebastian have been keeping the faith for so long. Through so much.
                                Please consider becoming part of part of their story, and part of their blessing.
                            </p>

                        </div>
                        {!expand && <a className="read-more" onClick={() => setExpand(true)}>Read More</a>
                        }
                        <div className="footer">
                            <button className="donate-btn-8">Donate</button>
                            <button className="share-btn-8">Share</button>

                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="card">
                            <h3 className="target">$1,233,840 <span className="acuale">raised of $500,000 target</span></h3>
                            <div className="border-bottom-green"></div>

                            <div className="share-donation">
                                <div> <button className="donate-btn-8">Share</button></div>
                                <div><button className="share-btn-8">Donate Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DonationPageStyles>
    )
}

export default DonationPage
