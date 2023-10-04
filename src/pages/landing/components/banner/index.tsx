import { ReactNode } from "react";

export type BannerComponentProps = {

}

function BannerComponent({ }: BannerComponentProps): ReactNode {
  return (
    <div className="min-h-[85%] bg-blue-600 text-white flex justify-center items-center">
      <div className="p-[80px] w-full max-w-[1024px] flex flex-col gap-[40px]">
        <h1 className="text-6xl flex flex-col gap-4 whitespace-nowrap">
          <span>
            The easiest way to
          </span>
          <span>
            find your dream job
          </span>
          <span>
            or new parther.
          </span>
        </h1>
        <h5 className="text-sm flex flex-col whitespace-nowrap">
          <span>
            If you have any questions just contact us pushing on
          </span>
          <span>
            the button below.
          </span>
        </h5>
        <button className="text-white bg-blue-500 px-4 py-2 whitespace-nowrap rounded-lg font-bold w-[150px]">Contact Us</button>
      </div>
    </div>
  )
}

export default BannerComponent;