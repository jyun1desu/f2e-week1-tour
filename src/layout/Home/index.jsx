import React from 'react';

import SearchInput from 'components/atoms/SearchInput';
import Selector from 'components/atoms/Selector';

import keyVisual from 'images/key-visual.png';

import style from './index.module.scss';

export default function index() {
	return (
		<div className={style.home}>
			<div className={style.top}>
				<section className={style.banner}>
					<img src={keyVisual} alt="key visual" />
					<div className={style.slogan}>
						<p>探索臺灣</p>
						<p>Taiwan is here.</p>
					</div>
				</section>
				<div className={style.searchBox}>
					<SearchInput placeholder="搜尋地點、景點、活動" />
					<div className={style.filters}>
						<Selector className={style.filter} placeholder="城市" />
						<Selector className={style.filter} placeholder="類型" />
						<Selector className={style.filter} placeholder="時間" />
					</div>
				</div>
			</div>
			<div className={style.bottom}>
				<section className={style.block}>
					<h2 className={style.title}>即將開始</h2>
					<div className={style.content}>
						<div className={style.content}>content</div>
					</div>
				</section>
				<section className={style.block}>
					<h2 className={style.title}>踏青郊遊</h2>
					<div className={style.content}>content</div>
				</section>
				<section className={style.block}>
					<h2 className={style.title}>美食饗宴</h2>
					<div className={style.content}>content</div>
				</section>
				<section className={style.block}>
					<h2 className={style.title}>文化之旅</h2>
					<div className={style.content}>content</div>
				</section>
			</div>
		</div>
	)
}
