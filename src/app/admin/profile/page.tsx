"use client";
import { useEffect, useState, useActionState, useTransition } from "react";
import clientFetch from "../../../lib/api/clientFetch";
import profileAction from "./profile.action";
import MainAppContentHeader from "../components/MainAppContentHeader";
import AdminLayout from "../components/AdminLayout";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ProfileResponse = {
  success: boolean;
  message: string;
  data: { user: User };
};

// We'll return this shape from the server action
type ActionState = {
  success?: boolean;
  message?: string;
  errors?: string[];
  updatedUser?: User;
};

const initialState: ActionState = {
  success: undefined,
  message: undefined,
  errors: undefined,
  updatedUser: undefined,
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [state, formAction, isPending] = useActionState(profileAction, initialState);
  const [isPendingTransition] = useTransition();

  // Loading initial user data
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await clientFetch<ProfileResponse>("/api/user/profile");
        console.log(response)
        setUser(response.data.user);
        // Set initial preview from current profile image
        if (response.data.user.profileImage) {
          setPreviewImage(response.data.user.profileImage);
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    getProfileData();
  }, []);

  // React to successful server action
  useEffect(() => {
    if (state?.success && state.updatedUser) {
      setUser(state.updatedUser);
      if (state.updatedUser.profileImage) {
        setPreviewImage(state.updatedUser.profileImage);
      }
    }
  }, [state]);

  // Handle image preview when user selects a new file
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AdminLayout>

      <MainAppContentHeader
        title=" Profile Section"
        breadcrumbs={[
          { label: 'Home', href: '/admin' },
          { label: 'Profile', href: '/admin/profile' },

        ]}
      />
      <div className="app-content">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="card card-primary card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Update Profile</div>
                </div>

                <div className="card-body">
                  {/* Current / Preview Image */}
                  <div className="text-center mb-4">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile preview"
                        className="rounded-circle"
                        style={{
                          width: "140px",
                          height: "140px",
                          objectFit: "cover",
                          border: "4px solid #fff",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                        style={{ width: "140px", height: "140px", margin: "0 auto" }}
                      >
                        <span className="text-white fs-1">No Image</span>
                      </div>
                    )}
                  </div>

                  <form action={formAction}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        defaultValue={user?.firstName || ""}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        defaultValue={user?.lastName || ""}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        defaultValue={user?.email || ""}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="profileImage" className="form-label">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="profileImage"
                        id="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isPending || isPendingTransition}
                      >
                        {isPending || isPendingTransition ? "Saving..." : "Update Profile"}
                      </button>
                    </div>

                    {/* Feedback messages */}
                    {state?.success && (
                      <div className="alert alert-success mt-3">
                        {state.message || "Profile updated successfully!"}
                      </div>
                    )}

                    {state?.errors && (
                      <div className="alert alert-danger mt-3">
                        {state.errors.map((err, i) => (
                          <div key={i}>{err}</div>
                        ))}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
}