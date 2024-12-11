import {
  MessagesSquare,
  ShieldCheck,
  Smile,
  SquareUserRound,
} from "lucide-react";
import features from "/public/images/features.png";

export default function Features() {
  return (
    <>
      <div className="pad-x">
        <h1 className="text-4xl sm:text-7xl font-bold w-full text-center tracking-tighter mb-10">
          What are our features 👀?
        </h1>
        <div
          className="relative container rounded-3xl mx-auto p-8 md:py-24 bg-cover bg-center border"
          style={{
            backgroundImage: `url(${features.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-8">
            <div className="bg-white rounded-md shadow-lg space-y-4 p-6">
              <div className="flex items-center space-x-4">
                <SquareUserRound className="w-10 h-10 text-blue-500" />
                <h2 className="font-semibold text-xl">
                  Emotion Tracking and Mood Monitoring
                </h2>
              </div>
              <p className="text-gray-600">
                Daily mood tracking system to monitor emotional patterns and
                identify triggers for better self-awareness.
              </p>
            </div>

            <div className="bg-white rounded-md shadow-lg space-y-4 p-6">
              <div className="flex items-center space-x-4">
                <ShieldCheck className="w-10 h-10 text-green-500" />
                <h2 className="font-semibold text-xl">
                  Personalized Care Recommendations
                </h2>
              </div>
              <p className="text-gray-600">
                AI-driven suggestions for coping strategies and activities based
                on your emotional patterns.
              </p>
            </div>

            <div className="bg-white rounded-md shadow-lg space-y-4 p-6">
              <div className="flex items-center space-x-4">
                <MessagesSquare className="w-10 h-10 text-purple-500" />
                <h2 className="font-semibold text-xl">
                  Professional Mental Health Consultation
                </h2>
              </div>
              <p className="text-gray-600">
                Connect with licensed therapists and counselors through secure
                video sessions and messaging.
              </p>
            </div>

            <div className="bg-white rounded-md shadow-lg space-y-4 p-6">
              <div className="flex items-center space-x-4">
                <Smile className="w-10 h-10 text-yellow-500" />
                <h2 className="font-semibold text-xl">
                  User-friendly Interface
                </h2>
              </div>
              <p className="text-gray-600">
                Simple navigation and intuitive design for easy access to mental
                health resources and support tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
