import React from "react";

function UserCard({ name, designation, age, url }) {
  return (
    <div
      class="card mb-3"
      style={{
        maxHeight: 540,
      }}
    >
      <div class="row g-0">
        <div class="col-md-2">
          <img
            src={url}
            style={{ maxHeight: 200 }}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{designation}</p>
            <p class="card-text">
              <small class="text-muted">{age}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
