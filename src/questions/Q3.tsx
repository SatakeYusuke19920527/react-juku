import axios from 'axios';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
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
  const [persons, setPersons] = useState<any[]>();
  const getAndSetData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const respo = res.data;
        setPersons(respo);
      })
  } 
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q3.tsx
            にAPIを叩いて値を取得し、一覧表示するコードを実装してください！
          </h1>
          <button onClick={getAndSetData}>データ取得</button>
          <h1>データ一覧</h1>
          <ul>
          {persons?.map(person => 
              <li>
                {person.id},{person.name},{person.username},{person.email},{person.address.street},{person.address.suite},{person.address.city},{person.address.zipcode},{person.address.geo.lat},{person.address.geo.lng}
                ,{person.phone},{person.website},{person.company.name},{person.company.catchPhrase},{person.company.bs}
              </li>
          )}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Q3;
