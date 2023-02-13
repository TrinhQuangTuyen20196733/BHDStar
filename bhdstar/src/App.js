import classNames from 'classnames/bind';
import { Routes, Route } from 'react-router-dom';

import styles from './components/Styles/GlobalStyle.module.scss';
import { Header } from './components/Layout/components';
import { Home, SchedulerFirm, SchedulerTheater, SystermTheater, Promotion, Event, Advertise, Recruitment, Information } from './components/Layout/Page';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("app", "container")}>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/lich-chieu-theo-phim/" element={<SchedulerFirm />} />
        <Route path="/lich-chieu/" element={<SchedulerTheater />} />
        <Route path="/he-thong-rap/" element={<SystermTheater />} />
        <Route path="/khuyen-mai/" element={<Promotion />} />
        <Route path="/su-ken/" element={<Event />} />
        <Route path="/dich-vu-quang-cao/" element={<Advertise />} />
        <Route path="/tuyen-dung/" element={<Recruitment />} />
        <Route path="/ve-chung-toi/" element={<Information />} />

      </Routes>
    </div>
  );
}

export default App;
