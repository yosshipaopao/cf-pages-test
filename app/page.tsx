"use client";

import type { NextPage } from 'next'

import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";
import { useCookies } from 'next-client-cookies';

export const runtime = 'edge';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const cookies = useCookies();
  const login = () => {
    signIn();
  }
  const logout = () => {
    signOut();
  }
  const submit = () => {
  }
  let component;
  if (session) {
    const { user } = session;
    component = (
      <div className="flex items-center">
        <button onClick={logout} className="btn btn-outline btn-primary">Logout</button>
        <div className="avatar mx-5">
          <div className="w-10 rounded-full">
            <Image src={user?.image || ''} alt={user?.name || ''} width={100} height={100}/>
          </div>
        </div>
        <span className="label-text">{user?.name || 'NaN'}</span>
      </div>
    );

  } else {
    component = (
      <button onClick={login} className="btn btn-wide btn-outline btn-primary">
        Login Discord
      </button>
    );
  }

  return (
    <>
    <div className="bgimage"></div>
    <main className="mx-5 my-20 md:mx-10 lg:mx-80 glass rounded-xl" data-theme="light">
      <form id="mainform">
      <div className="p-5">
        {component}
      </div>
      <div className="p-5">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              Discordで必須条件、注意事項を読みました。
            </span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">1.</span>
        <span className="label-text">年齢</span>
        <div className="m-10">
          <input
            type="number"
            placeholder="年齢"
            min="13" step="1" max="100"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">2.</span>
        <span className="label-text">
          メイン作業(18:00~26:00)に何時頃から参加できるか
        </span>
        <div className="m-10">
          <select className="select select-primary w-full max-w-xs" defaultValue="default">
            <option disabled value="default">
              回答を選択
            </option>
            <option value="18">18:00~</option>
            <option value="19">19:00~</option>
            <option value="20">20:00~</option>
            <option value="21">21:00~</option>
            <option value="22">22:00~</option>
          </select>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">3.</span>
        <span className="label-text">
          2で記述した時間帯から具体的に何時間来れるか
        </span>
        <div className="m-10">
          <input
            type="range"
            min="0"
            max="8"
            step="1"
            defaultValue="0"
            className="range range-primary"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">4.</span>
        <span className="label-text">得意な分野</span>
        <div className="m-10">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">作業</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">建築</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">回路</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">5.</span>
        <span className="label-text">
          Tweakeroo・Litematica・Item
          scroller・MiniHUDそれぞれについて知っている機能を記述
        </span>
        <div className="m-10">
          <textarea
            className="textarea textarea-primary textarea-lg w-full"
            placeholder="回答を入力"
          ></textarea>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">6.</span>
        <span className="label-text">PCスペック</span>
        <div className="m-10">
          <textarea
            className="textarea textarea-primary textarea-lg w-full"
            placeholder="回答を入力"
          ></textarea>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">6.</span>
        <span className="label-text">
          これまでにした作業、作った装置、建築の画像または設計図
          1つのファイル最大10MB、合計5つまで
        </span>
        <div className="m-10">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            multiple
          />
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">6.</span>
        <span className="label-text">自己PR</span>
        <div className="m-10">
          <textarea
            className="textarea textarea-primary textarea-lg w-full"
            placeholder="回答を入力"
          ></textarea>
        </div>
      </div>

      <div className="p-5">
        <span className="label-text p-5">6.</span>
        <span className="label-text">そのほか伝えたいこと</span>
        <div className="m-10">
          <textarea
            className="textarea textarea-primary textarea-lg w-full"
            placeholder="回答を入力"
          ></textarea>
        </div>
      </div>
      <div className="p-5">
        {component}
      </div>
      <div className="p-5">
        <button className="btn btn-wide btn-outline btn-primary" disabled type='submit'>Submit</button>
      </div>
      </form>
    </main>
    </>
  );
}
export default Home;