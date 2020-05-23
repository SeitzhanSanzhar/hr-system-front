import React from 'react';
import Search from './Search';
import ProfilePicture from './ProfilePicture';
import MenuBar from './MenuBar';
import PersonInfo from './PersonInfo'
import PersonToPositions from './PersonToPositions'


class ProfilePage extends React.Component{
	state = {
    is_profile: true
  };
	// render(){
	// 	return (
	// 		<div>
	// 			<MenuBar/>
	// 			{(() => {
	// 			        switch (this.state.is_profile) {
	// 			          case true:   return <div><PersonalInfo/><PersonToPositions/></div>;
	// 			          case false: return <Search/>;
	// 			        }
	// 			      })()}
	// 		</div>
	// 	)
	// }

	render(){
		return (
			<div>
				<MenuBar/>
				<PersonInfo/>
			</div>
		)
	}
}

export default ProfilePage;
