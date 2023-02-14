import styles from '@/styles/ProgressBar.module.css';

const ProgressBar = ({marginXAuto, barColor, progress, constant}) => {
  return (
    <div className={`${styles.progress_bar} ${marginXAuto ? "mx-auto" : ""}`}>
      <div
        className={`${styles.progress_bar_fill}`}
        style={{ width: `${progress*constant}%`, backgroundColor: `${barColor}` }}
      />
    </div>
  );
};

export default ProgressBar;
