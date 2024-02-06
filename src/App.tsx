import { useState } from "react";
import Sidebar from "./components/Sidebar";

const menuItemsData = [
	{
		id: crypto.randomUUID(),
		name: "Features",
		icon: "/images/icon-arrow-down.svg",
		submenu: [
			{
				id: crypto.randomUUID(),
				name: "Todo List",
				icon: "/images/icon-todo.svg",
			},
			{
				id: crypto.randomUUID(),
				name: "Calendar",
				icon: "/images/icon-calendar.svg",
			},
			{
				id: crypto.randomUUID(),
				name: "Reminders",
				icon: "/images/icon-reminders.svg",
			},
			{
				id: crypto.randomUUID(),
				name: "Planing",
				icon: "/images/icon-planning.svg",
			},
		],
	},
	{
		id: crypto.randomUUID(),
		name: "Company",
		icon: "/images/icon-arrow-down.svg",
		submenu: [
			{
				id: crypto.randomUUID(),
				name: "History",
			},
			{
				id: crypto.randomUUID(),
				name: "Our Team",
			},
			{
				id: crypto.randomUUID(),
				name: "Blog",
			},
		],
	},
	{
		id: crypto.randomUUID(),
		name: "Careers",
	},
	{
		id: crypto.randomUUID(),
		name: "About",
	},
];

function App() {
	const [sidebarOpen, setIsSidebarOpen] = useState(false);
	const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

	const handleSidebarOpen = () => {
		setIsSidebarOpen(true);
	};

	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};

	const handleSubmenuToggle = (itemId: string) => {
		setOpenSubmenuId(openSubmenuId === itemId ? null : itemId);
	};

	return (
		<main className="flex flex-col items-center justify-center w-full max-h-screen font-epilogue">
			{sidebarOpen && (
				<Sidebar menuItemsData={menuItemsData} onClose={handleSidebarClose} />
			)}
			<section className="md:max-w-[1500px] ">
				{/* Navbar */}

				<nav className="flex md:w-[95%] md:justify-start md:mx-auto justify-between items-center px-4 py-6">
					<img src="/images/logo.svg" alt="" />
					<div className="hidden text-neutral-mediumGray md:flex">
						{menuItemsData.map((item) => (
							<div
								key={item.id}
								className="relative"
								onClick={() => handleSubmenuToggle(item.id)}
							>
								<div className="flex items-center ml-20 cursor-pointer hover:text-neutral-almostBlack">
									{item.name}
									{item.submenu && (
										<img
											src="/images/icon-arrow-down.svg"
											alt=""
											className="h-2 ml-2 transition duration-200 transform group-hover:translate-y-1"
										/>
									)}
								</div>
								{/* Render submenu items */}
								{item.submenu && openSubmenuId === item.id && (
									<ul className="absolute px-4 py-4 mt-4 ml-10 space-y-4 bg-white shadow-2xl rounded-2xl">
										{item.submenu.map((subItem) => (
											<div
												key={subItem.id}
												className="flex items-baseline gap-3"
											>
												<img
													src={
														(
															subItem as {
																id: string;
																name: string;
																icon: string;
															}
														).icon
													}
													alt=""
													className="h-4"
												/>
												<li className="text-sm">{subItem.name}</li>
											</div>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
					<div className="hidden gap-4 ml-auto text-neutral-mediumGray md:items-center md:justify-center md:block">
						<button type="button" className="hover:text-neutral-almostBlack">
							Login
						</button>
						<button
							type="button"
							className="px-10 py-2 mx-6 border-2 hover:text-neutral-almostBlack hover:border-neutral-almostBlack border-neutral-mediumGray rounded-2xl"
						>
							Register
						</button>
					</div>
					{!sidebarOpen && (
						<button
							type="button"
							onClick={handleSidebarOpen}
							className="md:hidden"
						>
							<img src="/images/icon-menu.svg" alt="" />
						</button>
					)}
				</nav>

				{/* Main section */}
				<div className="md:flex md:w-[95%] md:flex-row-reverse">
					<img
						src="/images/image-hero-mobile.png"
						alt=""
						className="block md:hidden"
					/>
					<img
						src="/images/image-hero-desktop.png"
						alt=""
						className="hidden md:block md:mt-14 md:h-[650px]"
					/>
					<div className="text-center md:w-[50%] md:ml-[100px] md:flex-col md:items-start">
						<div className="md:flex md:w-[95%] md:flex-col md:items-start">
							<h1 className="text-4xl md:w-[72%] md:mt-20 md:text-start md:text-7xl text-center font-bold pt-[50px] pb-6">
								Make remote work
							</h1>
							<p className="text-center md:mt-4 w-[90%] md:text-start md:m-0 md:w-[60%] font-medium text-neutral-mediumGray m-auto">
								Get your team in sync, no matter your location. Streamline
								processes, create team rituals, and watch productivity soar.
							</p>
							<button
								className="px-8 py-3 mx-auto my-6 hover:bg-neutral-almostWhite hover:border-2 hover:border-neutral-almostBlack hover:text-neutral-almostBlack bg-neutral-almostBlack hover:font-bold md:mt-14 md:mx-0 text-neutral-almostWhite rounded-2xl"
								type="button"
							>
								Learn more
							</button>
						</div>
						<div className="flex mt-7 gap-2 px-4 md:mt-[125px] md:p-0 md:justify-start md:gap-14 items-center justify-around">
							<img
								src="/images/client-databiz.svg"
								alt=""
								className="h-[14px] md:h-auto"
							/>
							<img
								src="/images/client-audiophile.svg"
								alt=""
								className="h-[25px] md:h-auto"
							/>
							<img
								src="/images/client-meet.svg"
								alt=""
								className="md:h-auto h-[14px]"
							/>
							<img
								src="/images/client-maker.svg"
								alt=""
								className="md:h-auto h-[18px]"
							/>
						</div>
					</div>
				</div>

				<div className="text-[11px]  text-center">
					Challenge by{" "}
					<a
						className="text-blue-500"
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						className="text-blue-500"
						href="https://github.com/replayzor"
						target="_blank"
						rel="noreferrer"
					>
						Ionut Oltean
					</a>
					.
				</div>
			</section>
		</main>
	);
}

export default App;
