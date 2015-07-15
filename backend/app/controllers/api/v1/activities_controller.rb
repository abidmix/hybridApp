class Api::V1::ActivitiesController < ApplicationController
respond_to :json
before_filter :allow_cors

def allow_cors
  headers["Access-Control-Allow-Origin"] = "*"
  headers["Access-Control-Allow-Methods"] = %w{GET POST PUT DELETE}.join(",")
  headers["Access-Control-Allow-Headers"] =
    %w{Origin Accept Content-Type X-Requested-With X-CSRF-Token}.join(",")

  head(:ok) if request.request_method == "OPTIONS"
  # or, render text: ''
  # if that's more your style
end

  def index
    @activities = Activity.all
   render json: @activities 
  end

  def show
   respond_with activity
  end

  def create
    respond_with :api, :v1, Activity.create(activity_params)
  end

 def update
  @activity = Activity.find(params[:id])
  if @activity.update(activity_params)
    render json: @activity, status: 200
  else
    render json: { errors: @activity.errors }, status: 422
  end
end

 def destroy
        @activity = Activity.find(params[:id])
        if @activity.destroy
          render json: {}, status: 200
        else
          render json: {error: "Activity could not be deleted."}, status: 422
        end
 end
  
  private
  def activity
    respond_with Activity.find(params[:id])
  end

  
  def activity_params
    params.require(:activity).permit(:code, :description)
  end


end
