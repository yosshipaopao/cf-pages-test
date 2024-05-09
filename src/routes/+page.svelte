<script lang="ts">
  import LoginButton from '$lib/LoginButton.svelte';

	import type { PageData } from './$types';
</script>

<div class="bgimage"></div>
<main class="mx-5 my-20 md:mx-10 lg:mx-80 glass rounded-xl" data-theme="light">
  <form method="post">
  <div class="p-5">
    <LoginButton />
  </div>
  <div class="p-5">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">
          Discordで必須条件、注意事項を読みました。
        </span>
        <input type="checkbox" class="checkbox checkbox-primary" />
      </label>
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">1.</span>
    <span class="label-text">年齢</span>
    <div class="m-10">
      <input
        type="number"
        placeholder="年齢"
        min="13" step="1" max="100"
        class="input input-bordered input-primary w-full max-w-xs"
        name="年齢"
      />
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">2.</span>
    <span class="label-text">
      メイン作業(18:00~26:00)に何時頃から参加できるか
    </span>
    <div class="m-10">
      <select class="select select-primary w-full max-w-xs" value="default" name="何時頃から参加できるか">
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

  <div class="p-5">
    <span class="label-text p-5">3.</span>
    <span class="label-text">
      2で記述した時間帯から具体的に何時間来れるか
    </span>
    <div class="m-10">
      <input
        type="range"
        min="0"
        max="8"
        step="1"
        value="0"
        class="range range-primary"
        name="何時間来れるか"
      />
      <div class="w-full flex justify-between text-xs px-2">
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

  <div class="p-5">
    <span class="label-text p-5">4.</span>
    <span class="label-text">得意な分野</span>
    <div class="m-10">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">作業</span>
          <input
            name="作業"
            type="checkbox"
            class="checkbox checkbox-primary"
          />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text">建築</span>
          <input
            name="建築"
            type="checkbox"
            class="checkbox checkbox-primary"
          />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text">回路</span>
          <input
            name="回路"
            type="checkbox"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">5.</span>
    <span class="label-text">
      Tweakeroo・Litematica・Item
      scroller・MiniHUDそれぞれについて知っている機能を記述
    </span>
    <div class="m-10">
      <textarea
        name="知っている機能"
        class="textarea textarea-primary textarea-lg w-full"
        placeholder="回答を入力"
      ></textarea>
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">6.</span>
    <span class="label-text">PCスペック</span>
    <div class="m-10">
      <textarea
        name="PCスペック"
        class="textarea textarea-primary textarea-lg w-full"
        placeholder="回答を入力"
      ></textarea>
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">6.</span>
    <span class="label-text">
      これまでにした作業、作った装置、建築の画像または設計図
      1つのファイル最大10MB、合計5つまで
    </span>
    <div class="m-10">
      <input
        name="添付ファイル"
        type="file"
        class="file-input file-input-bordered file-input-primary w-full max-w-xs"
        multiple
      />
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">6.</span>
    <span class="label-text">自己PR</span>
    <div class="m-10">
      <textarea
        name="自己PR"
        class="textarea textarea-primary textarea-lg w-full"
        placeholder="回答を入力"
      ></textarea>
    </div>
  </div>

  <div class="p-5">
    <span class="label-text p-5">6.</span>
    <span class="label-text">そのほか伝えたいこと</span>
    <div class="m-10">
      <textarea
        name="その他"
        class="textarea textarea-primary textarea-lg w-full"
        placeholder="回答を入力"
      ></textarea>
    </div>
  </div>
  <div class="p-5">
    <button class="login btn btn-wide btn-outline btn-primary">
      Login Discord
    </button>
  </div>
  <div class="p-5">
    <button class="btn btn-wide btn-outline btn-primary" disabled type='submit'>Submit</button>
  </div>
  </form>
</main>