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
import { select } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  // Check if GenerateBlocks is available
  const isGenerateBlocksAvailable = !!select("core/blocks").getBlockType(
    "generateblocks/container"
  );

  // Set allowed blocks and template based on availability
  const ALLOWED_BLOCKS = isGenerateBlocksAvailable
    ? ["generateblocks/container"]
    : ["core/group"];
  const TEMPLATE = isGenerateBlocksAvailable
    ? [
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
                        [
                          "generateblocks/headline",
                          { level: 2, text: "Slide 1" },
                        ],
                        ["generateblocks/button", { text: "Previous" }],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ]
    : [
        [
          "core/group",
          { className: "splide__slide" }, // Assign the class name to the group block
          [
            [
              "core/heading",
              {
                level: 2,
                placeholder: "Slide Title",
                className: "splide__heading",
              },
            ],
            ["core/button", { text: "Previous", className: "splide__button" }],
          ],
        ],
      ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Splide Options", "theme-carousel")}>
          <SelectControl
            label={__("Type", "theme-carousel")}
            onChange={(value) => setAttributes({ type: value })}
            value={attributes.type}
            options={[
              { label: "Fade", value: "fade" },
              { label: "Loop", value: "loop" },
              { label: "Slide", value: "slide" },
            ]}
          />
          <RangeControl
            label={__("Speed", "theme-carousel")}
            onChange={(value) => setAttributes({ speed: value })}
            value={attributes.speed}
            min={100}
            max={1000}
          />
          <ToggleControl
            label={__("Drag", "theme-carousel")}
            onChange={(value) => setAttributes({ drag: value })}
            checked={attributes.drag}
          />
          <ToggleControl
            label={__("Autoplay", "theme-carousel")}
            onChange={(value) => setAttributes({ autoplay: value })}
            checked={attributes.autoplay}
          />
          <RangeControl
            label={__("Interval", "theme-carousel")}
            onChange={(value) => setAttributes({ interval: value })}
            value={attributes.interval}
            min={1000}
            max={10000}
          />
          <ToggleControl
            label={__("Pause on Hover", "theme-carousel")}
            onChange={(value) => setAttributes({ pauseOnHover: value })}
            checked={attributes.pauseOnHover}
          />
          <RangeControl
            label={__("Per Page", "theme-carousel")}
            onChange={(value) => setAttributes({ perPage: value })}
            value={attributes.perPage}
            min={1}
            max={10}
          />
          <RangeControl
            label={__("Per Move", "theme-carousel")}
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
