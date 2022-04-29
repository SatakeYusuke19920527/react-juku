import axios from "axios";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Q.css";
/**
 * Q3
 * 問題：APIを叩いて値を取得し、一覧表示してください！
 *
 * 使用するAPI > jsonplaceholder
 *
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
interface Api {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Geo {
  lat: number;
  lng: number;
}

const Q3 = () => {
  const api = "https://jsonplaceholder.typicode.com/users";
  const [posts, setPosts] = useState<Api[]>([]);

  const callApi = () => {
    axios.get(api).then((res) => {
      setPosts(res.data);
    });
  };

  const convertToRow = (api: Api): string => {
    if (api === undefined) {
      return "";
    }
    return (
      api.id +
      " | " +
      api.name +
      " | " +
      api.username +
      " | " +
      api.email +
      ", " +
      api.address.street +
      ", " +
      api.address.suite +
      api.address.city +
      ", " +
      api.address.zipcode +
      " | " +
      api.phone +
      " | " +
      api.website +
      " | " +
      api.company.name
    );
  };

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q3.tsx
            にAPIを叩いて値を取得し、一覧表示するコードを実装してください！
          </h1>
          <button
            onClick={() => {
              callApi();
            }}
          >
            データ取得
          </button>
          <h1>データ一覧</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{convertToRow(post)}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Q3;
