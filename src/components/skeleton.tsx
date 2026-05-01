type SkeletonProps = {
	quantity: number;
};

export default function Skeleton({ quantity }: SkeletonProps) {
	return (
		<>
			{Array.from({ length: quantity }).map((_, index) => (
				<div
					key={index}
					className="flex items-center mt-4 p-2 rounded-lg w-full"
				>
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>

						<div className="flex flex-col gap-2">
							<div className="w-28 h-3 bg-gray-300 rounded animate-pulse"></div>
							<div className="w-24 h-2 bg-gray-300 rounded animate-pulse"></div>
						</div>
					</div>
					<div className="ml-auto w-24 h-3 bg-gray-300 rounded animate-pulse"></div>
				</div>
			))}
		</>
	);
}