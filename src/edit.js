import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ["generateblocks/container"];
	const TEMPLATE = [
		[
			"generateblocks/container",
			{ className: "splide__slide" },
			[
				[
					"generateblocks/container",
					{ className: "grid-container" },
					[
						[
							"generateblocks/grid",
							{},
							[
								[
									"generateblocks/container",
									{ sizing: { width: "100%" } },
									[
										["generateblocks/headline", { level: 2, text: "Slide 1" }],
										["generateblocks/button", { text: "Previous" }],
									],
								],
							],
						],
					],
				],
			],
		],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Splide Options", "mtpress")}>
					<SelectControl
						label={__("Type", "mtpress")}
						onChange={(value) => setAttributes({ type: value })}
						value={attributes.type}
						options={[
							{ label: "Fade", value: "fade" },
							{ label: "Loop", value: "loop" },
							{ label: "Slide", value: "slide" },
						]}
					/>
					<RangeControl
						label={__("Speed", "mtpress")}
						onChange={(value) => setAttributes({ speed: value })}
						value={attributes.speed}
						min={100}
						max={1000}
					/>
					<ToggleControl
						label={__("Drag", "mtpress")}
						onChange={(value) => setAttributes({ drag: value })}
						checked={attributes.drag}
					/>
					<ToggleControl
						label={__("Autoplay", "mtpress")}
						onChange={(value) => setAttributes({ autoplay: value })}
						checked={attributes.autoplay}
					/>
					<RangeControl
						label={__("Interval", "mtpress")}
						onChange={(value) => setAttributes({ interval: value })}
						value={attributes.interval}
						min={1000}
						max={10000}
					/>
					<ToggleControl
						label={__("Pause on Hover", "mtpress")}
						onChange={(value) => setAttributes({ pauseOnHover: value })}
						checked={attributes.pauseOnHover}
					/>
					<RangeControl
						label={__("Per Page", "mtpress")}
						onChange={(value) => setAttributes({ perPage: value })}
						value={attributes.perPage}
						min={1}
						max={10}
					/>
					<RangeControl
						label={__("Per Move", "mtpress")}
						onChange={(value) => setAttributes({ perMove: value })}
						value={attributes.perMove}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div
					className="splide"
					aria-label="slider"
					data-splide={JSON.stringify(attributes).replace(/&quot;/g, '"')}
				>
					<div className="splide__track">
						<div className="splide__list">
							<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
