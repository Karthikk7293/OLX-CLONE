import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context'
import { useHistory } from 'react-router-dom';

const Create = () => {

  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  const [name, setName] = useState('');
  const [category, setCategoty] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const history = useHistory();
  const date = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          user: user.uid,
          createdAt: date.toDateString()
        })
        history.push('/');
      })
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={((e) => setName(e.target.value))}
          />
          <br />
          <label htmlFor="cname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="cname"
            name="category"
            value={category}
            onChange={((e) => setCategoty(e.target.value))}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            type="text"
            id="cname"
            name="price"
            value={price}
            onChange={((e) => setPrice(e.target.value))}
            className="input"  />
          <br />

          <br />
          {image && <img alt="posts" width="50px" src={image ? URL.createObjectURL(image) : ''}></img>}

          <br />
          <input type="file" onChange={((e) => {
            setImage(e.target.files[0]);
          })} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
