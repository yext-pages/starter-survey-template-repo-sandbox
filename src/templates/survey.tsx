import { useState } from "react";
import * as React from "react";
import "../styles/index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  TemplateConfig,
} from "@yext/pages";
import InfoSection from "../components/info-section";
import Form from "../components/Form";
import cx from "classnames";
import sendSurveyResponseToFunction from "../utils/sendSurveyResponseToFunction";
import Prompt from "../components/Prompt";

export const config: TemplateConfig = {
  stream: {
    $id: "survey",
    filter: {
      entityTypes: ["survey_survey"],
    },
    fields: [
      "id", 
      "name", 
      "survey_surveyTitle",
      "description",
      "slug", 
      "survey_surveyCoverImage.url",
      "survey_prompts.promptText",
      "survey_prompts.promptType",
      "survey_prompts.options"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.id;
};

const SurveyTemplate: Template<TemplateRenderProps> = ({
  document,
}) => {
  const { id, survey_prompts, survey_surveyCoverImage, survey_surveyTitle, description } = document;
  const [reviewSubmitted, setReviewSubmitted] = useState(false);


  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={survey_surveyTitle}>


          {/* new code starts here... */}
          {description}
          <img src= {survey_surveyCoverImage.url} />
          </InfoSection>

          
          <div className="w-full">
      {!reviewSubmitted && (
        <div className="flex flex-col w-full bg-gray-100 rounded-sm">
          <div
            className={cx("px-4 pb-4 pt-1")}
          >
            <Form
              successMessage="Response submitted successfully"
              onSubmit={async ({
                ...rest
              }) => {
                await sendSurveyResponseToFunction({
                  ...rest,id
                });
                setReviewSubmitted(true);
              }}
              saveButtonLabel="Submit Response"
              disclosure={
                <div className="text-gray-500 text-sm">
                  <p>
                    Your response will be sent to the Yext Knowledge Graph.
                  </p>
                </div>
              }
            >

            {survey_prompts.map((o) => (
              <Prompt
                name={o.promptText}
                label={o.promptText}
                promptType={o.promptType}
                options={o.options}
              />
            ))}

            </Form>
          </div>
        </div>
      )}
      {reviewSubmitted && (
        <div className="text-center text-gray-500 text-sm p-4 block border bg-gray-100">
          <p>
            Thank you for your response!
          </p>
        </div>
      )}
    </div>

      </div>
    </>
  );
};

export default SurveyTemplate;
