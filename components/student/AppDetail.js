import moment from "moment";
import { useSession } from "next-auth/client";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoDocumentTextOutline,
  IoChevronForward,
  IoChevronBackSharp,
} from "react-icons/io5";
import Link from "next/link";

export default function DetailedView({ data }) {
  const [session, loading] = useSession();

  if (!loading && !session) return <div>Error</div>;

  return (
    <>
      {data && (
        <div className="min-h-screen bg-gray-100 overflow-auto w-full">
          <main className="pb-10 pt-6">
            <Link href="/">
              <span className="flex items-center font-medium text-base text-gray-600 lg:mx-8 mb-4 cursor-pointer">
                <IoChevronBackSharp className="h-5 w-5 mr-1" />
                Back
              </span>
            </Link>

            {/* Page header */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img className="h-16 w-16 rounded-full" src={data.image} />
                    <span
                      className="absolute inset-0 shadow-inner rounded-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {data.fullName}
                  </h1>
                  <p className="text-sm font-medium text-gray-500">
                    Applied on{" "}
                    {moment(data.createdAt).format("MMMM Do YYYY, hh:mm:ss Z")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pb-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Full Name
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.fullName}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Location
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.location}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            School
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.education.school}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Student Status
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.education.studentStatus}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Major
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.education.universityMajor}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Email
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.email}
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Other Comments
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.otherComments}
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Links
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                              <a
                                href={data.resumeURL}
                                target="_blank"
                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-coolGray-100"
                              >
                                <div className="w-0 flex-1 flex items-center">
                                  <IoDocumentTextOutline className="flex-shrink-0 h-5 w-5 text-gray-600" />
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    Resume Link
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <IoChevronForward className="ml-1 text-lg" />
                                </div>
                              </a>
                              <a
                                href={data.linkedinURL}
                                target="_blank"
                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-coolGray-100"
                              >
                                <div className="w-0 flex-1 flex items-center">
                                  <IoLogoLinkedin className="flex-shrink-0 h-5 w-5 text-gray-600" />
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    Linkedin Profile
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <IoChevronForward className="ml-1 text-lg" />
                                </div>
                              </a>
                              <a
                                href={data.youtubeIntroductionURL}
                                target="_blank"
                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-coolGray-100"
                              >
                                <div className="w-0 flex-1 flex items-center">
                                  <IoLogoYoutube className="flex-shrink-0 h-5 w-5 text-gray-600" />
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    Youtube Introductory Video
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <IoChevronForward className="ml-1 text-lg" />
                                </div>
                              </a>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>
              <section
                aria-labelledby="timeline-title"
                className="lg:col-start-3 lg:col-span-1"
              >
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                  <h2
                    id="timeline-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Open Questions
                  </h2>

                  {data.openQuestions.map((response, index) => (
                    <div key={response.question} className="sm:col-span-2 mt-5">
                      <dt className="text-sm font-medium text-gray-500">
                        {index + 1}. {response.question}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {response.answer}
                      </dd>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
