import { ReactNode } from "react";
import BannerComponent from "./components/banner";
import Navbar from "../../components/nav-bar";

export type LandingPageParams = {

}

function LandingPage({ }: LandingPageParams): ReactNode {
  return (
    <main className="flex bg-white flex-1 h-screen w-screen overflow-y-auto overflow-x-hidden flex-col">
      <Navbar />
      <BannerComponent />
      {/* Page Content */}
      <article className="flex flex-col items-center">
        <div className="flex flex-col gap-4 py-[100px] w-full items-center justify-center">
          <h2 className="text-3xl font-bold text-black">What do we have for you?</h2>
          <span>What do we have for you?</span>
        </div>
        <div className="flex gap-[50px] max-w-[720px] flex-wrap px-8">
          {Array(4).fill(null).map(() => (
            <div className="flex gap-4">
              <div className="bg-blue-600 w-5 aspect-square"></div>
              <div>
              <h4 className="text-md font-bold text-black whitespace-nowrap">Good for decided companies</h4>
                <p>Here you can find the one for this position that
                  you need to cover as soon as posible.
                  With just a few clicks you’ll get it!</p>
              </div>
            </div>
          ))}
        </div>
      </article>
      {/* Footer */}
      <footer className="mt-[100px] bg-blue-600 min-h-[500px]">
      </footer>
    </main>
  )
}

export default LandingPage;