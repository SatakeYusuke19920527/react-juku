import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
import axios from "axios";
/**
 * Q3
 * 問題：APIを叩いて値を取得し、一覧表示してください！
 *
 * 使用するAPI > jsonplaceholder
 * https://jsonplaceholder.typicode.com/users
 *
 * 使用してほしいライブラリ
 * axios
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q3 = () => {
  const [res, setRes] = useState<any[]>([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      // 初期化
      res.length = 0;
      setRes(response.data);
    });
  }

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q3.tsx
            にAPIを叩いて値を取得し、一覧表示するコードを実装してください！
          </h1>
          <button onClick={fetchData}>データ取得</button>
          {res.map((row) =>
            <tr>
              {row.id},
              {row.name},
              {row.username},
              {row.address.street + " " + row.address.suite + " " + row.address.city + " " + row.address.zipcode + " " + row.address.geo.lat + " " + row.address.geo.lng},
              {row.phone},
              {row.website},
              {row.company.name + " " + row.company.catchPhrase + " " + row.company.bs}
            </tr>)}
        </div>
      </main>
    </Layout>
  );
};

export default Q3;
