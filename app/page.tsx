"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import type { NextPage } from 'next'
import React, { useState } from 'react';

export const runtime = 'edge';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const login = () => {
    alert("login");
    // データをcookieに入れる
    signIn();
  }
  const submit = () => {
    alert("submit");
  }
  const [theme, setTheme] = useState("dark");
  const themeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(theme=="light")setTheme("dark")
    if(theme=="dark")setTheme("light")
  }
  let component;
  if (session) {
    component = (
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
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
    <main className="p-40" data-theme={theme}>
      <div className="form-control w-52">
        <label className="cursor-pointer label">
          <input type="checkbox" className="toggle toggle-primary" onChange={themeChange}/>
        </label>
      </div>
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
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              回答を選択
            </option>
            <option>18:00~</option>
            <option>19:00~</option>
            <option>20:00~</option>
            <option>21:00~</option>
            <option>22:00~</option>
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
        <button className="btn btn-wide btn-outline btn-primary" disabled>Submit</button>
      </div>
    </main>
  );
}
export default Home;