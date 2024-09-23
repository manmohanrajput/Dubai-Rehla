import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { GetTransactions } from '../services/tripService';
import { useTranslation } from 'react-i18next';


function MyWallet() {
   const { t } = useTranslation();

   const [transaction, setTransaction] = useState({})
   useEffect(() => {
      getTransaction();
   }, [])
   const getTransaction = async () => {
      let { data } = await GetTransactions();
      setTransaction(data?.model);
   };

   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>{t('header.myWallet')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.myWallet')}</p>
               </div>
            </div>
         </section>
         <section class="my_wallet">
            <div class="container">
               <div class="wallet_bal">
                  <img src="images/my-wallet.webp" alt=" wallet cart" />
                  <h4>{t('dropdown.Walletbalance')}</h4>
                  <h2>{transaction?.TotalAmount} SAR</h2>
                  {/* <h2>350.50 SAR</h2> */}
               </div>
               <div class="history_box">
                  <h4>{t('dropdown.Wallethistory')}</h4>
                  <div class="balance_grid">
                     <div class="add_box">
                        {transaction?.Transactions?.map((data) => {
                           return (
                              <div class="wallet_history">
                                 <div class="add_blnc">
                                    <h5>{t('dropdown.Withdrawbalance')}</h5>
                                    <p>An amount of 12,500 riyals was deducted as a result of withdrawing an amount from the wallet via bank transfer</p>
                                 </div>
                                 <div class="withdraw_date">
                                    <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR </strong></p>
                                 </div>
                              </div>
                           )
                        })}
                        <div class="wallet_history">
                           <div class="add_blnc">
                              <h5>{t('dropdown.Addbalance')}</h5>
                              <p>As a result of charging your wallet via electronic payment, a balance of 12,500 riyals has been added</p>
                           </div>
                           <div class="add_date">
                              <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR  </strong></p>
                           </div>
                        </div>
                        <div class="wallet_history">
                           <div class="add_blnc">
                              <h5>{t('dropdown.Addbalance')}</h5>
                              <p>As a result of charging your wallet via electronic payment, a balance of 12,500 riyals has been added</p>
                           </div>
                           <div class="add_date">
                              <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR  </strong></p>
                           </div>
                        </div>
                        <a href="#/withdraw-balance" class="Withdraw_btn">{t('dropdown.Withdrawbalance')}</a>
                        {/* <a href="javascript:void(0);" class="Withdraw_btn">Withdraw a balance</a> */}
                     </div>
                     <div class="withdraw_box">
                        <div class="wallet_history">
                           <div class="add_blnc">
                              <h5>{t('dropdown.Withdrawbalance')}</h5>
                              <p>An amount of 12,500 riyals was deducted as a result of withdrawing an amount from the wallet via bank transfer</p>
                           </div>
                           <div class="withdraw_date">
                              <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR </strong></p>
                           </div>
                        </div>
                        <div class="wallet_history">
                           <div class="add_blnc">
                              <h5>{t('dropdown.Withdrawbalance')}</h5>
                              <p>An amount of 12,500 riyals was deducted as a result of withdrawing an amount from the wallet via bank transfer</p>
                           </div>
                           <div class="withdraw_date">
                              <p> <span>3- 3-2023 , 6 Am </span> <strong>12.500 SAR </strong></p>
                           </div>
                        </div>
                        <a href="#/add-balance-form" class="add_btn">{t('dropdown.Addbalance')}</a>
                        {/* <a href="javascript:void(0);" class="add_btn">Withdraw a balance</a> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default MyWallet