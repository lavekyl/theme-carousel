import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div
				className="splide"
				aria-label="slider"
				data-splide={JSON.stringify(attributes).replace(/&quot;/g, '"')}
			>
				<div className="splide__track">
					<div className="splide__list">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
