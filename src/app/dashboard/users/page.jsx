import Link from "next/link";
import style from "./user.module.css";
const page = () => {
  return (
    <div className={style.userContainer}>
        <Link href="/dashboard/users/adduser">
      <button className={style.button}>Add User</button>
        </Link>
      <table className={style.table}>
        {/* <caption className={style.caption}>User Information</caption> */}
        <thead className={style.thead}>
          <tr className={style.tr}>
            <th className={style.th}>Sr no</th>
            <th className={style.th}>UserId</th>
            <th className={style.th}>Account address</th>
            <th className={style.th}>PrivateKey</th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.tr}>
            <td className={style.td}>1</td>
            <td className={style.td}>Rajesh</td>
            <td className={style.td}>14</td>
            <td className={style.td}>A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
