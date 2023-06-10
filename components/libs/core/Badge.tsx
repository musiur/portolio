enum STYLES {
  BADGE = "absolute -top-[80%] -right-[60%] text-[0.6rem] px-[3px] pt-[2px] bg-pink-600 text-white rounded border border-white flex items-center justify-center",
}

const Badge = ({ count }: { count: number }) => {
  return <div className={STYLES.BADGE}>{count > 99 ? "99+" : count}</div>;
};

export default Badge;
