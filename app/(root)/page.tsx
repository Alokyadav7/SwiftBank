import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {firstName: 'Alok', lastName: 'Yadav', email: 'yalok0319@gmail.com'};
    return (
        <div>
            <section className="home">
                <div className="home-content">
                    <header className="home-header">
                        <HeaderBox
                            type="greeting"
                            title="Welcome"
                            user={loggedIn?.firstName || 'Guest'}
                            subtext="Access and manage your account and transactions effciently."
                        />

                        <TotalBalanceBox
                            accounts={[]}
                            totalBanks={1}
                            totalCurrentBalance={1340.50}
                        />
                    </header>

                    RECENT TRANSACTIONS
                </div>
                <RightSidebar
                    user={loggedIn}
                    transactions={[]}
                    banks={[{currentBalance: 1230}, {currentBalance: 500}]}
                />

            </section>
        </div>
    )
}

export default Home;