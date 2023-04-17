import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/discover.css'
// import Singleprofile from './pages/Profile';

const ProfileList = ({ profiles }) => {
  if (!profiles.length) {
    return <h3>No profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">Discover People</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <Link className="btn btn-block btn-squared btn-light text-dark" to={`/profiles/${profile._id}`}>
            <div key={profile._id} className="profileitem col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.profileTitle} <br />
                </h4>
                <div className='profileinfo'>
                  <div>
                    <h2>
                      User: {profile.username}
                    </h2>
                    <p>
                      {profile.blogs}
                    </p>
                  </div>
                </div>
                  
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;