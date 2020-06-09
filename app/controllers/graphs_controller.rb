class GraphsController < ApplicationController
  def index
    gon.weight_records = Graph.chart_data(current_user)
    gon.recorded_dates = current_user.graphs.map(&:date)
  end

  def create
  end

  def update
  end

end
