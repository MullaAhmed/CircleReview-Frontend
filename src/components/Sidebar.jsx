import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from "next/image"
import styles from '@/styles/Sidebar.module.css'

const Button = ({ buttonRoute, text, icon }) => {
	const router = useRouter()
	const route = router.pathname

	return (
		<Link 
			className={
				`flex items-center w-56 h-10 pl-4 border-0 rounded-lg ${route==buttonRoute?styles.active_button:""}`
			}
			href={buttonRoute}
		>
			<Image className="mr-3" src={icon} width={16} height={16} />
			<p className="text-white">{text}</p>
		</Link>
	)
}

const Sidebar = () => {
	return (
		<div className="flex  top-0 left-0 bottom-0 flex-col bg-dark w-72 h-[100%]">
			<div className="flex flex-none justify-center h-28 border-b border-border-color">
				<Image src="/circle-review-icon.svg" width={190} height={22.17} />
			</div>
			<div className="flex flex-col flex-none items-center justify-evenly h-52 pt-8 pb-4 border-b border-border-color">
				<Button buttonRoute="/" text="Home" icon="/home.svg" />
				<Button buttonRoute="/employee-database" text="Employee Database" icon="/employee-database.svg" />
				<Button buttonRoute="/my-reviews" text="My Reviews" icon="/my-reviews.svg" />
			</div>
			<div className="flex flex-col items-center justify-between flex-auto py-8">
				<div style={{'height': '28rem'}} className={`${styles.my_scrollbar} scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track overflow-y-auto mx-4 text-white`}>
				</div>	
				<div className="flex justify-center w-52 h-10 border border-white rounded-lg">
					<Image className="mr-3" src="/logout.svg" width={16} height={16} />
					<button className="text-white ">Logout</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;
