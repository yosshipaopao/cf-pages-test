<script lang="ts">
  import LoginButton from '$lib/LoginButton.svelte';
  import SearchMcid from '$lib/SearchMCID.svelte';
  import Required from '$lib/Required.svelte';
  import { t, locale } from '$lib/translations/translations';
  import { createForm } from 'felte';

  let language = "ja_jp";
  const onChangeLanguage = () => {
    locale.set(language);
  }

  const { form } = createForm({
    onSubmit: (values) => {
      // ...
    },
    validate: (values) => {
      type Errors = {
        [key: string]: string[]
      }
      let errors: Errors = {}
      if (!values.ok) { errors.ok = ["err"] }
      if (!(values.age && values.age >= 13 && values.age <= 99 && values.age.isInteger())) { errors.age = ["err"] }
      if (!(values.work_start_time && values.work_start_time >= 18 && values.work_start_time <= 22 && values.work_start_time.isInteger())) { errors.work_start_time = ["err"] }
      if (!(values.working_time && values.working_time >= 1 && values.working_time <= 9 && values.working_time.isInteger())) { errors.working_time = ["err"] }
      //['ok', 'age', 'work_start_time', 'working_time', 'skill', 'mods', 'pc_spec', 'pr', 'mcid']
      // ...
    }
  })
</script>

<div class="bgimage"></div>
<main class="mx-5 my-20 md:mx-10 lg:mx-80 md:px-5 lg:py-5 lg:px-20 glass rounded-xl" data-theme="light">
  <form method="post" use:form>

    <div class="p-5 flex items-center justify-between">
      <LoginButton />
      <select class="select select-primary select-bordered select-sm max-w-xs" bind:value={language} on:change={onChangeLanguage}>
        <option value="en_us">🇺🇸 English</option> 
        <option value="ja_jp">🇯🇵 Japanese</option> 
      </select>
    </div>

    <!-- OK -->
    <div class="p-5">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">
            {$t('common.ok')}<Required />
          </span>
          <input type="checkbox" name="ok" class="checkbox checkbox-primary" />
        </label>
      </div>
    </div>

    <!-- Age -->
    <div class="p-5">
      <span class="label-text p-5">1.</span>
      <span class="label-text">{$t('common.age')}<Required /></span>
      <div class="m-10">
        <input
          type="number"
          placeholder="{$t('common.answer_input')}"
          min="13" step="1" max="99"
          class="input input-bordered input-primary w-full max-w-xs"
          name="age"
        />
      </div>
    </div>

    <!-- Work start time -->
    <div class="p-5">
      <span class="label-text p-5">2.</span>
      <span class="label-text">{$t('common.work_start_time')}<Required /></span>
      <div class="m-10">
        <select class="select select-primary w-full max-w-xs" name="work_start_time">
          <option disabled selected value="default">
            {$t('common.answer_select')}
          </option>
          <option value="18">18:00~</option>
          <option value="19">19:00~</option>
          <option value="20">20:00~</option>
          <option value="21">21:00~</option>
          <option value="22">22:00~</option>
        </select>
      </div>
    </div>

    <!-- Working time -->
    <div class="p-5">
      <span class="label-text p-5">3.</span>
      <span class="label-text">{$t('common.working_time')}<Required /></span>
      <div class="m-10">
        <input
          type="range"
          min="0"
          max="8"
          step="1"
          value="0"
          class="range range-primary"
          name="working_time"
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

    <!-- Skill -->
    <div class="p-5">
      <span class="label-text p-5">4.</span>
      <span class="label-text">{$t('common.skill')}<Required /></span>
      <div class="m-10">
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{$t('common.skill_work')}</span>
            <input
              name="skill" value="work"
              type="checkbox"
              class="checkbox checkbox-primary"
            />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">{$t('common.skill_deco')}</span>
            <input
              name="skill" value="deco"
              type="checkbox"
              class="checkbox checkbox-primary"
            />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">{$t('common.skill_dev')}</span>
            <input
              name="skill" value="dev"
              type="checkbox"
              class="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
    </div>

    <!-- Mod -->
    <div class="p-5">
      <span class="label-text p-5">5.</span>
      <span class="label-text">{$t('common.mods')}</span>
      <div class="m-10">
        <textarea
          name="mods"
          class="textarea textarea-primary textarea-lg w-full"
          placeholder="{$t('common.answer_input')}"
        ></textarea>
      </div>
    </div>

    <!-- PC Spec -->
    <div class="p-5">
      <span class="label-text p-5">6.</span>
      <span class="label-text">{$t('common.pc_spec')}<Required /></span>
      <div class="m-10">
        <textarea
          name="pc_spec"
          class="textarea textarea-primary textarea-lg w-full"
          placeholder="{$t('common.answer_input')}"
        ></textarea>
      </div>
    </div>

    <!-- Files -->
    <div class="p-5">
      <span class="label-text p-5">7.</span>
      <span class="label-text">{$t('common.feature')}</span>
      <div class="m-10">
        <input
          name="files"
          type="file"
          class="file-input file-input-bordered file-input-primary w-full max-w-xs"
          multiple
        />
      </div>
    </div>

    <!-- PR -->
    <div class="p-5">
      <span class="label-text p-5">8.</span>
      <span class="label-text">{$t('common.pr')}<Required /></span>
      <div class="m-10">
        <textarea
          name="pr"
          required
          class="textarea textarea-primary textarea-lg w-full"
          placeholder="{$t('common.answer_input')}"
        ></textarea>
      </div>
    </div>

    <!-- Other -->
    <div class="p-5">
      <span class="label-text p-5">9.</span>
      <span class="label-text">{$t('common.other')}</span>
      <div class="m-10">
        <textarea
          name="other"
          class="textarea textarea-primary textarea-lg w-full"
          placeholder="{$t('common.answer_input')}"
        ></textarea>
      </div>
    </div>

    <!-- MCID -->
    <div class="p-5">
      <span class="label-text p-5">10.</span>
      <span class="label-text">{$t('common.mcid')}<Required /></span>
      <div class="m-10">
        <SearchMcid />
      </div>
    </div>

    <div class="p-5">
      <LoginButton />
    </div>
    <div class="p-5 tooltip tooltip-error" data-tip="未入力の必須項目があります">
      <button class="btn btn-wide btn-outline btn-primary" disabled type='submit'>Submit</button>
    </div>
  </form>
</main>