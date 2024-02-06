import { useState } from "react";
import arrowDown from "/images/icon-arrow-down.svg";
import arrowUp from "/images/icon-arrow-up.svg";

type MenuItem = {
	id: string;
	name: string;
	icon?: string;
	submenu?: SubmenuItem[];
};

type SubmenuItem = {
	id: string;
	name: string;
	icon?: string;
};

type SidebarProps = {
	onClose: () => void;
	menuItemsData: MenuItem[];
};

function Sidebar({ onClose, menuItemsData }: SidebarProps) {
	const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

	const handleSubmenuToggle = (itemId: string) => {
		setOpenSubmenuId(openSubmenuId === itemId ? null : itemId);
	};

	return (
		<ul className="absolute text-neutral-mediumGray right-0 w-[60%] flex flex-col h-screen bg-white top-0">
			<button
				type="button"
				onClick={onClose}
				className="flex justify-end py-6 pr-6"
			>
				<img src="/images/icon-close-menu.svg" alt="" />
			</button>

			{menuItemsData.map((item) => (
				<li key={item.id} className="relative py-3 pl-6 ">
					<button type="button" onClick={() => handleSubmenuToggle(item.id)}>
						<div className="flex items-baseline gap-4">
							{item.name}
							{item.submenu && (
								<img
									src={`${openSubmenuId ? arrowUp : arrowDown}`}
									alt=""
									className="h-[6px]"
								/>
							)}
						</div>
					</button>
					{item.submenu && openSubmenuId === item.id && (
						<ul className="py-2 pl-6 bg-white">
							{item.submenu.map((subItem) => (
								<div key={subItem.id} className="flex items-baseline gap-4">
									<img src={subItem.icon} alt="" className="h-4" />
									<li className="text-[18px] mt-4">{subItem.name}</li>
								</div>
							))}
						</ul>
					)}
				</li>
			))}
			<div className="flex flex-col gap-4 mt-6">
				<button type="button">Login</button>
				<button
					type="button"
					className="py-2 mx-6 border-2 border-neutral-mediumGray rounded-2xl"
				>
					Register
				</button>
			</div>
		</ul>
	);
}

export default Sidebar;
